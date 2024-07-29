const User = require('../models/User'); // Import the User model
const jwt = require('jsonwebtoken'); // Import JWT for generating tokens
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

// Handle user signup
exports.signup = async (req, res) => {
  const { name, email, password } = req.body; // Get user details from request body

  try {
    let user = await User.findOne({ email }); // Check if user already exists
    if (user) {
      return res.status(400).json({ msg: 'User already exists' }); // Respond with an error if user already exists
    }

    user = new User({ name, email, password }); // Create a new user instance
    await user.save(); // Save the user to the database

    const payload = { user: { id: user.id } }; // Create payload with user ID
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Generate a JWT token

    res.status(201).json({ token }); // Respond with the token
  } catch (err) {
    console.error(err.message); // Log the error
    res.status(500).send('Server error'); // Respond with a server error message
  }
};

// Handle user login
exports.login = async (req, res) => {
  const { email, password } = req.body; // Get user credentials from request body

  try {
    let user = await User.findOne({ email }); // Find user by email
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' }); // Respond with an error if user not found
    }

    const isMatch = await user.comparePassword(password); // Compare provided password with stored hashed password
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' }); // Respond with an error if passwords don't match
    }

    const payload = { user: { id: user.id } }; // Create payload with user ID
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Generate a JWT token

    res.status(200).json({ token }); // Respond with the token
  } catch (err) {
    console.error(err.message); // Log the error
    res.status(500).send('Server error'); // Respond with a server error message
  }
};
