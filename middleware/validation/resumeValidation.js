const { check, validationResult } = require('express-validator');

exports.createResumeValidation = [
  check('basicInfo.name', 'Name is required').not().isEmpty(),
  check('basicInfo.contact', 'Contact is required').not().isEmpty(),
  check('basicInfo.address', 'Address is required').not().isEmpty(),
  check('basicInfo.email', 'Email is required').isEmail(),
  // Add more validation rules as needed
];

exports.updateResumeValidation = [
  check('basicInfo.name', 'Name is required').not().isEmpty(),
  check('basicInfo.contact', 'Contact is required').not().isEmpty(),
  check('basicInfo.address', 'Address is required').not().isEmpty(),
  check('basicInfo.email', 'Email is required').isEmail(),
  // Add more validation rules as needed
];
