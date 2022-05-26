const router = require('express').Router();

const contactController = require('../controllers/contact.controller');

router.post('/create', contactController.create);

module.exports = router;