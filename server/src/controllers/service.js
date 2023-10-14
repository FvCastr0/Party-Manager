const { Service } = require('../models/Service');

class SerivceController {
  async store(req, res) {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const response = await Service.create(service);
      return res.status(200).json({ response, msg: 'Serviço criado com sucesso!' });
    } catch (e) {
      return res.status(400).json({ msg: 'Aconteceu algum problema!' });
    }
  }

  async get(req, res) {
    try {
      const services = await Service.find();
      return res.status(200).json({ services, msg: 'Serviços carregados!' });
    } catch (e) {
      return res.status(400).json({ msg: 'Não foi possivel carregar os servicos' });
    }
  }

  async delete(req, res) {
    try {
      await Service.findByIdAndDelete(req.params.id);
      return res.status(200).json('Serviço deletado com sucesso!');
    } catch (e) {
      return res.status(400).json({ msg: 'Não foi possivel deletar o serviço' });
    }
  }
}

module.exports = new SerivceController();
