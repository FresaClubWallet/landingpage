const router = require('express').Router();

const newsletterController = require('../controllers/newsletter.controller');
const {check} = require('express-validator');

router.post('/create', [
    check('g-recaptcha-response').not().isEmpty().withMessage('You are robot!'),
    check('email', 'Your email is not valid').not().isEmpty().isEmail().normalizeEmail(),
 ], newsletterController.create);

module.exports = router;