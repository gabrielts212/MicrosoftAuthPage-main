import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

let users = [];

function createToken(user) {
  return jwt.sign({ name: user.name }, JWT_SECRET); 
}

function readToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);  
  } catch (err) {
    throw new Error("Token inválido");
  }
}

export function verifica(token) {
  return readToken(token);
}

export function registerr(body) {
  const user = users.find(({ name }) => name === body.name);
  if (user) throw new Error('Usuário já cadastrado');

  users.push(body);

  const token = createToken(body);
  return token;
}

export function loginn(body) {
  const user = users.find(({ name }) => name === body.name);
  if (!user) throw new Error('Usuário não cadastrado');
  if (user.password !== body.password) throw new Error('Senha incorreta');

  const token = createToken(user);
  return token;
}
