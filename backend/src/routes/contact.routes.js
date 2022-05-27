const router = require('express').Router();

const contactController = require('../controllers/contact.controller');
const {check} = require('express-validator');

router.post('/create', [
    check('g-recaptcha-response').not().isEmpty().withMessage('You are robot!'),
    check('email', 'Your email is not valid').not().isEmpty().isEmail().normalizeEmail(),
    check('name').exists().isLength({min: 5}).trim().escape().withMessage('Name must have more than 5 characters'),
    check('subject').exists().isLength({min: 20}).trim().escape().withMessage('Subject must have more than 20 characters'),
    check('message').exists().isLength({min: 50}).trim().escape().withMessage('Message must have more than 50 characters'),
 ], contactController.create);

module.exports = router;