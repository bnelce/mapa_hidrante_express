import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/user';
import authConfig from '../../config/auth';

// Classe de autenticacao do usuario
class SessionController {
  async store(req, res) {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    // const userpass = await User.findOne({ where: { pswd } });
    // console.log(userpass);
    // Comparando se o email existe
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const pswdMD5 = await crypto
      .createHash('md5')
      .update(password)
      .digest('hex');

    // Comparando se a senha está correta
    if (pswdMD5 != user.pswd) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: { id, name },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
