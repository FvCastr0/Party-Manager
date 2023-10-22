const { Router } = require('express');
const party = require('../controllers/party');

const router = new Router();

router.get('/', party.get);
router.get('/:id', party.getOne);
router.post('/create', party.store);
router.delete('/:id', party.delete);
router.patch('/:id', party.update);

module.exports = router;
