# Oráculo da Palma

Versão completa para `oraculo.devnexusdigital.com`.

## Publicação

Lê primeiro `PUBLICAR-SEM-LINHA-DE-COMANDOS.txt`.

O frontend fica no GitHub Pages. A análise de imagem passa pelo Worker já criado:

`https://oraculo-da-palma-api.econsulting-cv.workers.dev`

Para actualizar o Worker através do navegador, usa o ficheiro:

`WORKER-CLOUDFLARE-COLAR-NO-EDITOR.js`

A chave Groq continua guardada como segredo no Worker e não está incluída neste pacote.

## Ajustes desta versão

- imagem até 2048 px;
- compressão JPEG a 92%;
- leitura aceite a partir de 30% quando a zona central da palma é reconhecível;
- pequenos cortes, sombras moderadas e ausência do pulso deixam de provocar rejeição automática;
- diagnóstico público desligado;
- cache busting nos ficheiros do site.

A leitura destina-se exclusivamente a entretenimento.
