import Hidrantes from '../models/Hidrantes';
import SecUser from '../models/SecUser';
import Files from '../models/Files';

class HidrantesController {

  async index(req,res) {
    const hidrantes = await Hidrantes.findAll({
      attributes: ['numero','tipo','cor','cep','latitude','longitude','ativo'],            
      include: [
        {
          model: Files,          
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: SecUser,
          as: 'user',
          attributes: ['login','email'],
          include: [
            {
              model: Files,          
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],          
        },
      ],      
    });
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
    return res.json({ 
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
      user_id, });
  }
}
export default new HidrantesController();
