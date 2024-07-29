const express = require('express');
const { signupValidation, loginValidation, validate } = require('../middleware/userValidation');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signupValidation, validate, userController.signup);
router.post('/login', loginValidation, validate, userController.login);

module.exports = router;
