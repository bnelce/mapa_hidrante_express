import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import SecUser from '../models/SecUser';
import authConfig from '../../config/auth';

// Classe de autenticacao do usuario
class SessionController {
  async store(req, res) {
    const { login, password } = req.body;
    const secUser = await SecUser.findOne({ where: { login } });
    // const userpass = await User.findOne({ where: { pswd } });
    // console.log(userpass);
    // Comparando se o email existe
    if (!secUser) {
      return res.status(401).json({ error: 'User not found' });
    }

    const pswdMD5 = await crypto
      .createHash('md5')
      .update(password)
      .digest('hex');

    // Comparando se a senha está correta
    if (pswdMD5 != secUser.pswd) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { name } = secUser;

    return res.json({
      secuser: { login, name },
      token: jwt.sign({ login, name, email }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
