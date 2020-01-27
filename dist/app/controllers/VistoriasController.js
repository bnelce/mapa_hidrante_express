"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Hidrantes = require('../models/Hidrantes'); var _Hidrantes2 = _interopRequireDefault(_Hidrantes);
var _Vistoria = require('../models/Vistoria'); var _Vistoria2 = _interopRequireDefault(_Vistoria);
var _SecUser = require('../models/SecUser'); var _SecUser2 = _interopRequireDefault(_SecUser);
var _Files = require('../models/Files'); var _Files2 = _interopRequireDefault(_Files);



class VistoriasController {

  async index(req,res) {
    const vistorias = await _Vistoria2.default.findAll({
      attributes: ['tipo_vistoria','tipo_hidrante','cor',
                   'pressao','vazao','condicoes','acesso',
                   'instalacao','pintura'],            
      include: [
        {
          model: _Hidrantes2.default,
          as: 'hidrante',
          attributes: ['numero','tipo','cor','cep','latitude','longitude'],
        },
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
      ],
      
    });
    return res.json(vistorias);
  }


  async show(req,res) {
    
    const vistoria = await _Vistoria2.default.findOne({
        where: {id: req.params.id},
        attributes: ['tipo_vistoria','tipo_hidrante','cor',
                     'pressao','vazao','condicoes','acesso',
                     'instalacao','pintura'],            
        include: [
          {
            model: _Hidrantes2.default,
            as: 'hidrante',
            attributes: ['numero','tipo','cor','cep','latitude','longitude'],
          },
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
    } = await _Vistoria2.default.create(req.body);
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
    const vistoria = await _Vistoria2.default.findByPk(req.params.id)  
    const vist = await vistoria.update(req.body);
    return res.json(vist);
  }

}

exports. default = new VistoriasController();
