const { Party } = require('../models/Party');

function checkPartyBudget(budget, services) {
  const price = services.reduce((sum, service) => sum + service.price, 0);
  if (price > budget) {
    return false;
  }
  return true;
}

class PartyController {
  async store(req, res) {
    try {
      const party = {
        title: req.body.title,
        author: req.body.description,
        description: req.body.description,
        budget: req.body.budget,
        services: req.body.services,
        image: req.body.image,
      };

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        return res.status(406).json('O seu orçamento é insuficiente');
      }

      const response = await Party.create(party);
      return res.status(200).json({ response, msg: 'Festa criada com sucesso!' });
    } catch (e) {
      return res.status(400).json({ msg: 'Não foi possivel criar festa', e });
    }
  }

  async get(req, res) {
    try {
      const parties = await Party.find();
      return res.status(200).json({ parties, msg: 'Festas carregadas!' });
    } catch (e) {
      return res.status(400).json({ msg: 'Não foi possivel carregar as festas' });
    }
  }

  async getOne(req, res) {
    try {
      const party = await Party.findById(req.params.id);
      return res.status(200).json({ party, msg: 'Festa carregada!' });
    } catch (e) {
      return res.status(400).json({ msg: 'Não foi possivel carregar a festa' });
    }
  }

  async delete(req, res) {
    try {
      await Party.findByIdAndDelete(req.params.id);
      return res.status(200).json('Festa deletada com sucesso!');
    } catch (e) {
      return res.status(400).json({ msg: 'Não foi possivel deletar a festa' });
    }
  }

  async update(req, res) {
    try {
      const party = {
        title: req.body.title,
        author: req.body.description,
        description: req.body.description,
        budget: req.body.budget,
        services: req.body.services,
        image: req.body.image,
      };

      await Party.findByIdAndUpdate(req.params.id, party);
      return res.status(200).json('Festa atualizada com sucesso!');
    } catch (e) {
      return res.status(400).json({ msg: 'Não foi possivel atualizar a festa' });
    }
  }
}

module.exports = new PartyController();
