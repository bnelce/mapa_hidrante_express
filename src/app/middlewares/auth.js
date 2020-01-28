import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

// Midddleware de autenticacao, permite que o usuario modifique algo apenas se tiver logado
export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  // Tirar o bearrer
  const [, token] = authHeader.split(' ');

  try {
    // Decodificar o tocker e ver se está correto
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userLogin = decoded.login;
    req.userEmail = decoded.email;
    req.userName = decoded.name;

    
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
