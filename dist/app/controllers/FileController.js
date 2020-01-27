"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Files = require('../models/Files'); var _Files2 = _interopRequireDefault(_Files);

class PubFileController {
  async store(req, res) {

    const { originalname: name, filename: path } = req.file;

    const file = await _Files2.default.create({
      name,
      path
    });

    return res.json(file);
  }
}

exports. default = new PubFileController();
