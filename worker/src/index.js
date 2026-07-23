const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";
const ALLOWED_TRADITIONS = new Set(["africana", "europeia", "elfica", "magia-antiga"]);
const ALLOWED_SEX = new Set(["feminino", "masculino", "nao-indicado"]);

const traditionGuides = {
  africana: "Cria uma leitura inspirada em ancestralidade, terra, ciclos, comunidade, memória e continuidade. Não atribuas a leitura a uma cultura africana específica, não inventes rituais reais e não apresentes África como uma tradição única. O tom deve ser digno, caloroso e simbólico.",
  europeia: "Cria uma leitura inspirada na quiromancia europeia clássica, com linguagem sóbria, elegante e contida. Usa referências gerais a caminhos, escolhas, carácter e ciclos de vida, sem afirmar certezas sobrenaturais.",
  elfica: "Cria uma leitura inteiramente fantástica, inspirada em florestas antigas, estrelas, rios, árvores, luas e povos élficos imaginários. Deixa claro pelo estilo que se trata de fantasia e evita imitar directamente universos protegidos por direitos de autor.",
  "magia-antiga": "Cria uma leitura fantástica e hermética, inspirada em alquimia, constelações, metais, portais, selos e bibliotecas antigas. Não dês instruções de magia real, rituais perigosos ou previsões factuais."
};

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = env.ALLOWED_ORIGIN || "https://oraculo.devnexusdigital.com";

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin, allowedOrigin)
      });
    }

    if (request.method !== "POST") {
      return jsonResponse(405, { error: "Método não autorizado." }, origin, allowedOrigin);
    }

    if (origin && origin !== allowedOrigin && !isLocalOrigin(origin)) {
      return jsonResponse(403, { error: "Origem não autorizada." }, origin, allowedOrigin);
    }

    if (!env.GROQ_API_KEY) {
      return jsonResponse(500, { error: "A chave GROQ_API_KEY ainda não foi configurada no Cloudflare Worker." }, origin, allowedOrigin);
    }

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > 10 * 1024 * 1024) {
      return jsonResponse(413, { error: "O pedido é demasiado grande." }, origin, allowedOrigin);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse(400, { error: "Pedido inválido." }, origin, allowedOrigin);
    }

    const { imageDataUrl, birthDate, sex, tradition } = payload;
    if (!imageDataUrl?.startsWith("data:image/")) {
      return jsonResponse(400, { error: "A imagem não chegou num formato válido." }, origin, allowedOrigin);
    }
    if (!birthDate || Number.isNaN(Date.parse(birthDate))) {
      return jsonResponse(400, { error: "A data de nascimento não é válida." }, origin, allowedOrigin);
    }
    if (!ALLOWED_SEX.has(sex)) {
      return jsonResponse(400, { error: "A opção de sexo não é válida." }, origin, allowedOrigin);
    }
    if (!ALLOWED_TRADITIONS.has(tradition)) {
      return jsonResponse(400, { error: "A tradição de leitura não é válida." }, origin, allowedOrigin);
    }

    const model = env.GROQ_VISION_MODEL || "qwen/qwen3.6-27b";
    const age = calculateAge(birthDate);
    const sexDescription = sex === "nao-indicado" ? "não indicado" : sex;

    const systemPrompt = `
És o motor narrativo do site "Oráculo da Palma". Analisa fotografias de palmas apenas para criar uma experiência simbólica de entretenimento.

Regras obrigatórias:
- Responde em português de Portugal.
- Não apresentes quiromancia, astrologia ou simbolismo como ciência ou facto.
- Não faças diagnósticos de saúde física ou mental.
- Não determines personalidade, sexualidade, etnia, religião, fertilidade, esperança de vida, criminalidade ou condição financeira a partir da imagem.
- Não infiras o sexo, idade ou identidade pela fotografia; usa apenas os dados textuais fornecidos.
- Não anuncies morte, doença, acidentes, traições, gravidez, lotaria, datas exactas ou acontecimentos inevitáveis.
- Observa apenas elementos visuais gerais: enquadramento, nitidez, palma aberta ou fechada, linhas principais aparentes, continuidade, profundidade relativa e forma geral.
- Quando uma linha não estiver visível, diz isso claramente. Não inventes detalhes visuais.
- A data de nascimento e o sexo servem apenas para variar a narrativa; não os uses como fundamento científico.
- Mantém um tom misterioso, elegante, positivo, humano e não infantil.

${traditionGuides[tradition]}

Devolve APENAS um objecto JSON válido, sem markdown, com esta estrutura exacta:
{
  "imageQuality": 0,
  "needsRetake": false,
  "retakeReason": "",
  "title": "",
  "opening": "",
  "lines": {
    "life": "",
    "head": "",
    "heart": "",
    "fate": ""
  },
  "archetype": "",
  "closing": "",
  "symbols": ["", "", ""]
}

imageQuality deve ser um número inteiro entre 0 e 100. Se for inferior a 55, needsRetake deve ser true e a leitura deve ser breve, prudente e centrada no pedido de uma nova fotografia.
Cada texto das linhas deve ter entre 45 e 90 palavras. opening e closing devem ter entre 55 e 100 palavras.
`;

    const userPrompt = `
Dados fornecidos pelo utilizador:
- Data de nascimento: ${birthDate}
- Idade aproximada: ${age}
- Sexo declarado: ${sexDescription}
- Tradição escolhida: ${tradition}

Analisa a fotografia e cria a leitura solicitada dentro das regras definidas.
`;

    try {
      const groqResponse = await fetch(GROQ_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model,
          temperature: 0.7,
          max_completion_tokens: 1800,
          reasoning_effort: "none",
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: [
                { type: "text", text: userPrompt },
                { type: "image_url", image_url: { url: imageDataUrl } }
              ]
            }
          ]
        })
      });

      const groqData = await groqResponse.json();
      if (!groqResponse.ok) {
        console.error("Groq error:", groqData);
        return jsonResponse(groqResponse.status, {
          error: groqData?.error?.message || "O serviço de leitura não respondeu correctamente."
        }, origin, allowedOrigin);
      }

      const content = groqData?.choices?.[0]?.message?.content;
      if (!content) throw new Error("Resposta vazia do modelo.");

      const reading = safeParseJson(content);
      return jsonResponse(200, sanitiseReading(reading), origin, allowedOrigin);
    } catch (error) {
      console.error("read-palm failure:", error);
      return jsonResponse(500, {
        error: "Não foi possível concluir a leitura. Tenta novamente com outra fotografia."
      }, origin, allowedOrigin);
    }
  }
};

function isLocalOrigin(origin) {
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin);
}

function corsHeaders(origin, allowedOrigin) {
  const acceptedOrigin = origin === allowedOrigin || isLocalOrigin(origin) ? origin : allowedOrigin;
  return {
    "Access-Control-Allow-Origin": acceptedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

function jsonResponse(status, body, origin, allowedOrigin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      ...corsHeaders(origin, allowedOrigin)
    }
  });
}

function safeParseJson(content) {
  const cleaned = content.trim().replace(/^```json\s*/i, "").replace(/```$/i, "");
  return JSON.parse(cleaned);
}

function sanitiseReading(reading) {
  const quality = Math.min(100, Math.max(0, Math.round(Number(reading.imageQuality) || 0)));
  return {
    imageQuality: quality,
    needsRetake: quality < 55 || Boolean(reading.needsRetake),
    retakeReason: cleanText(reading.retakeReason, 320),
    title: cleanText(reading.title, 140),
    opening: cleanText(reading.opening, 1000),
    lines: {
      life: cleanText(reading.lines?.life, 1000),
      head: cleanText(reading.lines?.head, 1000),
      heart: cleanText(reading.lines?.heart, 1000),
      fate: cleanText(reading.lines?.fate, 1000)
    },
    archetype: cleanText(reading.archetype, 120),
    closing: cleanText(reading.closing, 1000),
    symbols: Array.isArray(reading.symbols)
      ? reading.symbols.slice(0, 5).map((item) => cleanText(item, 60)).filter(Boolean)
      : []
  };
}

function cleanText(value, maxLength) {
  return String(value || "").replace(/[<>]/g, "").trim().slice(0, maxLength);
}

function calculateAge(birthDate) {
  const birth = new Date(`${birthDate}T00:00:00Z`);
  const now = new Date();
  let age = now.getUTCFullYear() - birth.getUTCFullYear();
  const monthDifference = now.getUTCMonth() - birth.getUTCMonth();
  if (monthDifference < 0 || (monthDifference === 0 && now.getUTCDate() < birth.getUTCDate())) age -= 1;
  return Math.max(0, age);
}
