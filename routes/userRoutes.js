const express = require('express');
const userController = require('../controllers/userController');
const { signupValidation, loginValidation, validate } = require('../middleware/userValidation');
const router = express.Router();

// Signup Route
router.post('/signup', signupValidation, validate, userController.signup);

// Login Route
router.post('/login', loginValidation, validate, userController.login);

module.exports = router;
