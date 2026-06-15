## Primeiro passo npm i e depois npm run dev ✔

## **1. Introdução**

A minha aplicação front-end é responsiva construída com Next.js, React, Tailwind CSS, JWT e autenticação da Microsoft. O meu projeto demonstra como criar uma aplicação web moderna com variáveis de ambiente para configuração, autenticação e design responsivo.

## **3. Tecnologias Utilizadas 🖥**

As principais tecnologias utilizadas no meu projeto

- Design responsivo com Tailwind CSS
- Autenticação usando a Microsoft
- JSON Web Token (JWT) para autenticação segura
- Variáveis de ambiente para configuração
- Construído com Next.js e React

## Endpoints / Integração com backend

Este frontend foi desenvolvido com Next.js. Para integrar com o backend .NET (UserService) siga:

- Defina em `.env.local` na raiz do frontend: `NEXT_PUBLIC_API_URL=http://localhost:5000`
- O frontend deve obter um access token do Azure AD (MSAL) e enviá-lo no header `Authorization: Bearer <token>` para chamadas protegidas.

Endpoints esperados (backend de exemplo - [backend README](backend/README.md)):

1. GET /api/user/{id}
   - Protegido: enviar header `Authorization: Bearer <token>`
   - Retorna JSON do usuário

2. POST /api/user
   - Cria usuário (público no exemplo)

Exemplo de chamada no frontend (usando `msal-react` para obter token):

```js
// exemplo simplificado dentro de um componente React
const { instance, accounts } = useMsal();
const tokenRequest = {
  scopes: [`api://${process.env.NEXT_PUBLIC_API_CLIENT_ID}/access_as_user`],
  account: accounts[0],
};
const resp = await instance.acquireTokenSilent(tokenRequest);
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/1`, {
  headers: { Authorization: `Bearer ${resp.accessToken}` },
});
const user = await res.json();
```

## Como rodar o frontend (dev)

- Instale dependências: `npm i`
- Inicie: `npm run dev` (será servido em `http://localhost:3000`)

## Observações

- Para desenvolvimento local, inicie o backend com `docker-compose up --build` na pasta `backend` (ou rode o projeto no Visual Studio) e atualize `NEXT_PUBLIC_API_URL` se necessário.
- Mantenha os secrets do Azure AD e connection strings fora do repositório; use `.env.local` e variáveis de ambiente no host.
