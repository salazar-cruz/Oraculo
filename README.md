# Oráculo da Palma — Versão 1.2.0

Pacote completo para `oraculo.devnexusdigital.com`.

## Alterações desta versão

- retiradas a data de nascimento e a indicação de sexo;
- nome obrigatório no início da consulta;
- a leitura dirige-se ao utilizador pelo nome;
- retirada a caixa de confirmação que bloqueava a submissão;
- aviso sobre envio temporário da imagem apresentado directamente junto do botão;
- quatro figuras míticas integradas nas opções de leitura;
- ambiente visual recriado como uma câmara antiga, escura e iluminada por fogo;
- retirada a marca DevNexus da interface;
- rodapé com `Conceito de Salazar da Cruz` e versão `1.2.0`;
- mantém a melhoria de leitura de imagens até 2048 px e JPEG a 92%.

## Publicação

Lê `PUBLICAR-SEM-LINHA-DE-COMANDOS.txt`.

O frontend fica no GitHub Pages. A análise passa pelo Worker existente:

`https://oraculo-da-palma-api.econsulting-cv.workers.dev`

Para actualizar o Worker pelo navegador, usa:

`WORKER-CLOUDFLARE-COLAR-NO-EDITOR.js`

A chave Groq continua guardada como segredo no Worker e não está incluída neste pacote.
