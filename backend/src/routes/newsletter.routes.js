const router = require('express').Router();

const newsletterController = require('../controllers/newsletter.controller');

router.post('/create', newsletterController.create);

module.exports = router;