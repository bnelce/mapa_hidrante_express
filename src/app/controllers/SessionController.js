"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);
var _SecUser = require('../models/SecUser'); var _SecUser2 = _interopRequireDefault(_SecUser);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

// Classe de autenticacao do usuario
class SessionController {
  async store(req, res) {
    const { login, password } = req.body;
    const secUser = await _SecUser2.default.findOne({ where: { login } });
    // const userpass = await User.findOne({ where: { pswd } });
    // console.log(userpass);
    // Comparando se o email existe
    if (!secUser) {
      return res.status(401).json({ error: 'User not found' });
    }

    const pswdMD5 = await _crypto2.default
      .createHash('md5')
      .update(password)
      .digest('hex');

    // Comparando se a senha está correta
    if (pswdMD5 != secUser.pswd) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { name, email } = secUser;

    return res.json({
      secuser: { login, name, email },
      token: _jsonwebtoken2.default.sign({ login, name, email }, _auth2.default.secret, {
        expiresIn: _auth2.default.expiresIn,
      }),
    });
  }
}

exports. default = new SessionController();
