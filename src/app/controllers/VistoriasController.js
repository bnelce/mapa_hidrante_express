import Hidrantes from '../models/Hidrantes';
import Vistoria from '../models/Vistoria';
import SecUser from '../models/SecUser';
import Files from '../models/Files';



class VistoriasController {

  async index(req,res) {
    const vistorias = await Vistoria.findAll({
      attributes: ['tipo_vistoria','tipo_hidrante','cor',
                   'pressao','vazao','condicoes','acesso',
                   'instalacao','pintura'],            
      include: [
        {
          model: Hidrantes,
          as: 'hidrante',
          attributes: ['numero','tipo','cor','cep','latitude','longitude'],
        },
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
    return res.json(vistorias);
  }


  async show(req,res) {
    
    const vistoria = await Vistoria.findOne({
        where: {id: req.params.id},
        attributes: ['tipo_vistoria','tipo_hidrante','cor',
                     'pressao','vazao','condicoes','acesso',
                     'instalacao','pintura'],            
        include: [
          {
            model: Hidrantes,
            as: 'hidrante',
            attributes: ['numero','tipo','cor','cep','latitude','longitude'],
          },
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
    return res.json(vistoria);
  }

  async store(req, res) {
    const {
        tipo_vistoria,
        tipo_hidrante,
        cor,
        pressao,
        vazao,
        condicoes,
        acesso,
        instalacao,
        pintura,
        imagem_id,
        user_id,
        hidrante_id
    } = await Vistoria.create(req.body);
    return res.json({
        id, 
        tipo_vistoria,
        tipo_hidrante,
        cor,
        pressao,
        vazao,
        condicoes,
        acesso,
        instalacao,
        pintura,
        imagem_id,
        user_id,
        hidrante_id });
  }

  async update(req,res) {
    const vistoria = await Vistoria.findByPk(req.params.id)  
    const vist = await vistoria.update(req.body);
    return res.json(vist);
  }

}

export default new VistoriasController();
