import Hidrantes from '../models/Hidrantes';

class HidrantesController {
  async store(req, res) {
    const {
      numero,
      tipo,
      cor,
      cep,
      end_rua,
      end_numero,
      municipio,
      uf,
      latitude,
      longitude,
      hidrometro,
      imagem_id,
      user_id,
    } = await Hidrantes.create(req.body);
    return res.json({ numero, tipo });
  }
}
export default new HidrantesController();
