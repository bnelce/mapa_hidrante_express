"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _util = require('util');
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

// Midddleware de autenticacao, permite que o usuario modifique algo apenas se tiver logado
exports. default = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  // Tirar o bearrer
  const [, token] = authHeader.split(' ');

  try {
    // Decodificar o tocker e ver se está correto
    const decoded = await _util.promisify.call(void 0, _jsonwebtoken2.default.verify)(token, _auth2.default.secret);
    req.userLogin = decoded.login;
    req.userEmail = decoded.email;
    req.userName = decoded.name;

    
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
