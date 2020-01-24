import SecUser from '../models/SecUser';

class SecUserController {
  async store(req, res) {
    const secUserExists = await User.findOne({ where: { email: req.body.email } });
    if (secUserExists) {
      return res.status(400).json({ error: 'User already exister' });
    }
    const { id, name, email, provider } = await SecUser.create(req.body);
    return res.json({ id, name, email, provider });
  }

  async update(req, res) {
    return res.json(req.id);
  }
}
export default new SecUserController();
