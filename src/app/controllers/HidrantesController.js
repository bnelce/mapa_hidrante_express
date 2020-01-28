import Hidrantes from '../models/Hidrantes';
import SecUser from '../models/SecUser';
import Files from '../models/Files';
import Vistorias from '../models/Vistoria';

class HidrantesController {

  async index(req,res) {
    const hidrantes = await Hidrantes.findAll({
      attributes: ['id','numero','tipo','cor','cep','latitude','longitude'],            
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
        {
          model: Vistorias,          
          as: 'vistorias',
          attributes: ['tipo_vistoria','tipo_hidrante','cor',
                   'pressao','vazao','condicoes','acesso',
                   'instalacao','pintura'], 
        },
      ],      
    });
    return res.json(hidrantes);
  }

  async show(req,res) {
    const hidrante = await Hidrantes.findOne({
      where: {id: req.params.id},
      attributes: ['id','numero','tipo','cor','cep','latitude','longitude'],            
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
        {
          model: Vistorias,          
          as: 'vistorias',
          attributes: ['tipo_vistoria','tipo_hidrante','cor',
                   'pressao','vazao','condicoes','acesso',
                   'instalacao','pintura'], 
        },
      ],   
    });
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
