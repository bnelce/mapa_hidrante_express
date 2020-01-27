"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Hidrantes = require('../models/Hidrantes'); var _Hidrantes2 = _interopRequireDefault(_Hidrantes);
var _SecUser = require('../models/SecUser'); var _SecUser2 = _interopRequireDefault(_SecUser);
var _Files = require('../models/Files'); var _Files2 = _interopRequireDefault(_Files);
var _Vistoria = require('../models/Vistoria'); var _Vistoria2 = _interopRequireDefault(_Vistoria);

class HidrantesController {

  async index(req,res) {
    const hidrantes = await _Hidrantes2.default.findAll({
      attributes: ['id','numero','tipo','cor','cep','latitude','longitude'],            
      include: [        
        {
          model: _Files2.default,          
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: _SecUser2.default,
          as: 'user',
          attributes: ['login','email'],
          include: [
            {
              model: _Files2.default,          
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],          
        },
        {
          model: _Vistoria2.default,          
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
    const hidrante = await _Hidrantes2.default.findOne({
      where: {id: req.params.id},
      attributes: ['id','numero','tipo','cor','cep','latitude','longitude'],            
      include: [        
        {
          model: _Files2.default,          
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: _SecUser2.default,
          as: 'user',
          attributes: ['login','email'],
          include: [
            {
              model: _Files2.default,          
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],          
        },
        {
          model: _Vistoria2.default,          
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
    } = await _Hidrantes2.default.create(req.body);
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
exports. default = new HidrantesController();
