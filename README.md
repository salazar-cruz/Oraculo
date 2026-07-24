# Oráculo da Palma — v1.5.9

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
