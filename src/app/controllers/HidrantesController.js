import Hidrantes from '../models/Hidrantes';
import { Query } from 'pg';

class HidrantesController {

  async index(req,res) {
    const hidrantes = await Hidrantes.findAll();
    return res.json(hidrantes);
  }

  async show(req,res) {
    const hidrante = await Hidrantes.findByPk(req.params.id);
    return res.json(hidrante);
  }

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
    return res.json({ numero, tipo, cor,
      cep,
      end_rua,
      end_numero,
      municipio,
      uf,
      latitude,
      longitude,
      hidrometro,
      imagem_id,
      user_id, });
  }
}
export default new HidrantesController();
