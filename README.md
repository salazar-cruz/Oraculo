# Oráculo da Palma

Site de leitura simbólica da palma, preparado para:

- **Frontend:** GitHub Pages
- **Backend da IA:** Cloudflare Worker
- **Modelo:** Groq `qwen/qwen3.6-27b`
- **Subdomínio:** `oraculo.devnexusdigital.com`

A chave Groq nunca fica no GitHub Pages nem no código público do navegador.

## Estrutura

```text
oraculo-da-palma/
├── index.html
├── styles.css
├── app.js
├── config.js
├── CNAME
├── .nojekyll
└── worker/
    ├── package.json
    ├── wrangler.toml
    └── src/
        └── index.js
```

## 1. Publicar o backend no Cloudflare Worker

É necessário ter Node.js instalado.

```bash
cd worker
npm install
npx wrangler login
npx wrangler secret put GROQ_API_KEY
npm run deploy
```

Quando o Cloudflare terminar a publicação, apresenta um endereço semelhante a:

```text
https://oraculo-da-palma-api.nome-da-conta.workers.dev
```

Guardar esse endereço.

## 2. Configurar o frontend

Abrir `config.js` e substituir:

```javascript
apiUrl: "https://oraculo-da-palma-api.SUBDOMINIO.workers.dev"
```

pelo endereço real do Worker.

## 3. Publicar no GitHub Pages

1. Criar um repositório, por exemplo `oraculo-da-palma`.
2. Colocar estes ficheiros na raiz do repositório.
3. Em **Settings → Pages**, escolher a publicação a partir da branch `main` e pasta `/root`.
4. O ficheiro `CNAME` já indica `oraculo.devnexusdigital.com`.

## 4. Configurar o DNS na Porkbun

Criar um registo:

```text
Tipo: CNAME
Host: oraculo
Answer/Value: salazar-cruz.github.io
```

Não alterar os registos do domínio principal `devnexusdigital.com`.

## 5. Testar localmente

Frontend:

```bash
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

O Worker aceita temporariamente pedidos de `localhost` para testes.

## Privacidade

A fotografia é comprimida no navegador e enviada ao Worker, que a remete à Groq para análise. O código não guarda deliberadamente as imagens. Antes da abertura ao público, devem existir política de privacidade, termos de utilização, limites de pedidos e protecção contra abuso.

## Limitação

A leitura é uma experiência de entretenimento. Não constitui avaliação científica, médica, psicológica, financeira ou profissional.


## Correcção de “Failed to fetch”

O Worker aceita estes endereços de origem:

- `https://oraculo.devnexusdigital.com`
- `https://salazar-cruz.github.io`
- `localhost`, para testes

Depois de qualquer alteração no Worker, voltar a publicar:

```bash
cd worker
npm install
npx wrangler secret put GROQ_API_KEY
npm run deploy
```

Abrir directamente o endereço `workers.dev`. Deve surgir:

```json
{"status":"ok","service":"Oráculo da Palma API"}
```


## Modo de diagnóstico

Esta versão apresenta um painel técnico durante e depois de cada análise. O painel regista:

- URL e origem do site;
- resultado do teste GET ao Worker;
- teste opaco para distinguir falha de rede de bloqueio CORS;
- estado HTTP, cabeçalhos e corpo da resposta;
- duração do pedido;
- tamanho aproximado da imagem e do pedido;
- mensagem e stack do erro JavaScript;
- diagnóstico provável.

A fotografia e a chave GROQ_API_KEY não são impressas no painel. Para desligar o modo de diagnóstico após resolver o problema:

```javascript
window.ORACULO_CONFIG = {
  apiUrl: "https://ENDERECO-REAL.workers.dev",
  debug: false
};
```

No Worker, alterar `DEBUG_MODE = "false"` em `worker/wrangler.toml` e voltar a publicar.
