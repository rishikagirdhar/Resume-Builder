const mongoose = require('mongoose');
const { isEmail } = require('validator'); // Import validator for email validation

// Define the User schema with validation
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'], // Ensures that the name field is mandatory
    trim: true, // Automatically removes leading and trailing whitespace
  },
  email: {
    type: String,
    required: [true, 'Email is required'], // Ensures that the email field is mandatory
    unique: true, // Ensures that each email is unique across the collection
    trim: true, // Automatically removes leading and trailing whitespace
    lowercase: true, // Converts the email to lowercase before saving
    validate: {
      validator: function(v) {
        return isEmail(v); // Validates that the email address format is correct
      },
      message: props => `${props.value} is not a valid email address`, // Custom error message
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'], // Ensures that the password field is mandatory
    minlength: [6, 'Password must be at least 6 characters long'], // Ensures that the password is at least 6 characters long
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create the User model using the defined schema
const User = mongoose.model('User', userSchema);

module.exports = User;
