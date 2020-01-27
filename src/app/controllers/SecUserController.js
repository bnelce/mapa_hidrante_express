"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _SecUser = require('../models/SecUser'); var _SecUser2 = _interopRequireDefault(_SecUser);
var _Files = require('../models/Files'); var _Files2 = _interopRequireDefault(_Files);
var _Hidrantes = require('../models/Hidrantes'); var _Hidrantes2 = _interopRequireDefault(_Hidrantes);

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

    const secUserExists = await _SecUser2.default.findOne({ where: { login: req.body.login } });
    if (secUserExists) {
      return res.status(400).json({ error: 'Usuário já existente' });
    }
    
    const { login, password, name, active } = await _SecUser2.default.create(req.body);
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
    const secUsers = await _SecUser2.default.findAll({
      attributes: ['login', 'name','email','active'],   
      include: [
        {
          model: _Hidrantes2.default,
          as: 'hidrantes',
          attributes: ['numero','tipo','cor','cep','latitude','longitude'],
        },
        {
          model: _Files2.default,          
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });
      
    return res.json(secUsers);
  }

  async show(req,res) {

    const secUser = await _SecUser2.default.findOne({
      where: {login: req.userLogin},
      attributes: ['login', 'name','email','active'],   
      include: [
        {
          model: _Hidrantes2.default,
          as: 'hidrantes',
          attributes: ['numero','tipo','cor','cep','latitude','longitude'],
        },
        {
          model: _Files2.default,          
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });
      
    return res.json(secUser);

  }
}

exports. default = new SecUserController();
