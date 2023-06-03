## POC COM NEXT E REACT JS

Uma forma simples de fazer upload diretamente no S3 com a LIB UPPY.IO

https://www.npmjs.com/package/uppy

https://uppy.io/

NO ARQUIVO SERVICE.TSX TEM UMA FUNÇÃO QUE ESTÁ RETORNANDO A URL ASSINADA DO BUCKET DIRETAMENTE DO AWS SDK. ISSO PODE SER ALTERADO PARA UMA LAMBDA FUTURAMENTE, TIRANDO A RESPONSABILIDADE DO FRONTEND DE CONECTAR COM AWS-SDK
## Getting Started

Insira as ENVs no .ENV e rode a aplicação com um dos comandos abaixo

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```