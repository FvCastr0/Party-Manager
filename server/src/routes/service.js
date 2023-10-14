const { Router } = require('express');
const service = require('../controllers/service');

const router = new Router();

router.get('/', service.get);
router.post('/', service.store);
router.delete('/:id', service.delete);

module.exports = router;
