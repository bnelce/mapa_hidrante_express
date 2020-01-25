import * as Yup from 'yup';
import SecUser from '../models/SecUser';

class SecUserController {
  async store(req, res) {

    const schema = Yup.object().shape({
      login: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      name:Yup.string().required(),
      active: Yup.string().required()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails 2' });
    }

    const secUserExists = await SecUser.findOne({ where: { login: req.body.login } });
    if (secUserExists) {
      return res.status(400).json({ error: 'Usuário já existente' });
    }
    
    const { login, password, name, active } = await SecUser.create(req.body);
    return res.json({ id, login, password, name, active });
  }
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
  async update(req, res) {
    return res.json(req.id);
  }

  async index(req,res) {
    const secUsers = await SecUser.findAll();

    return res.json(secUsers);
  }
}

export default new SecUserController();
