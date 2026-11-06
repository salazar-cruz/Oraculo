# Oráculo da Palma — v1.8.4

Aplicação web estática para GitHub Pages, com backend de visão no Cloudflare Worker e Groq.

## Funcionalidades

- Português, inglês e francês.
- Seleção automática inicial pelo idioma do navegador.
- Nome obrigatório para personalizar a leitura.
- Fotografia pela câmara ou carregamento de imagem.
- Leituras Africana, Europeia, Élfica e Magia Antiga.
- Estatísticas públicas agregadas por país.
- Sem armazenamento de nomes, fotografias ou endereços IP.

## Publicação

Siga `PUBLICAR-SEM-LINHA-DE-COMANDOS.txt`.

## Estatísticas

A base de dados Cloudflare D1 utiliza a ligação `STATS_DB`. Execute uma única vez o conteúdo de `D1-SCHEMA.sql` na consola da base de dados.

Cada leitura concluída e aceite acrescenta uma unidade ao país identificado pela Cloudflare. Imagens recusadas não entram na contagem.


NOVIDADE DA VERSÃO 1.8.4
- A leitura passou de 4 para 12 áreas: 4 linhas principais, 4 linhas secundárias e 4 grupos de características visíveis da mão.
- Esta versão exige também a actualização do Worker da Cloudflare com o ficheiro WORKER-CLOUDFLARE-COLAR-NO-EDITOR.js.


## Versão 1.8.4

Acrescenta três dimensões narrativas: sombra e controlo, sexualidade e intimidade, e espiritualidade. Estas secções são simbólicas e incluem avisos contra diagnóstico psicológico, inferência de orientação sexual e identificação de crença religiosa.


## Partilha completa
A partilha inclui todas as secções da leitura, o arquétipo, os símbolos, a conclusão e o endereço do site numa única mensagem. Em navegadores sem partilha nativa, o texto integral é copiado ou descarregado como TXT.


## Mestres da versão 1.8.4

- Tradição Africana — Mestre Kamba
- Tradição Cigana — Mestra Samara
- Tradição Élfica — Mestra Nyméria
- Tradição Antiga — Mestra Morgana
- Tradição Islâmica — Mestre Tarik
- Tradição Budista — Mestre Tara

As seis imagens em alta definição estão na pasta `assets/`. A animação é feita no navegador com zoom lento, aura, brilho e símbolos próprios de cada cartão.


## Actualização Groq v1.8.4
O modelo de visão foi migrado de `qwen/qwen3.6-27b` para `qwen/qwen3.8-27b`. Na Cloudflare, a variável `GROQ_VISION_MODEL` deve ter exactamente o valor `qwen/qwen3.8-27b`.


## Novo mestre v1.8.4
- São Cipriano — O Grande Feiticeiro
- Tradição Sombria (`sombria`)
- Figura encapuzada criada integralmente em CSS, sem novo ficheiro de imagem.
- Efeito exclusivo: eclipse, sombra líquida e selo carmesim.
- O Worker trata a tradição como narrativa simbólica inspirada em folclore e grimórios, sem instruções de rituais reais.


## v1.8.4 — correcção do limite OTPM da Groq
O Worker limita a resposta a 850 tokens e mantém as 15 secções em formato mais conciso, compatível com o limite de 1.000 OTPM da organização on_demand.

## v1.8.4 — leitura mais desenvolvida e retry automático

- limite de saída ajustado para 980 tokens, respeitando o tecto OTPM de 1.000;
- leitura menos resumida, com maior desenvolvimento nas linhas principais e conclusão;
- retry automático único para respostas 429 quando a Groq indicar `retry-after` até 25 segundos;
- rodapé sincronizado e visível como `Versão 1.8.4`;
- cache-busting dos ficheiros web actualizado para `20261106-184`.
