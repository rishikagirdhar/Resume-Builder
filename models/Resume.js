const mongoose = require('mongoose'); // Import Mongoose for MongoDB interactions

// Define the Resume schema
const resumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true // Ensure the resume is associated with a user
  },
  basicInfo: {
    name: { type: String, required: true }, // Basic information fields with validation
    contact: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String }
  },
  education: [{
    institute: { type: String, required: true }, // Education details with validation
    fieldOfStudy: { type: String, required: true },
    location: { type: String, required: true },
    cgpa: { type: String }
  }],
  workExperience: [{
    company: { type: String, required: true }, // Work experience details with validation
    designation: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date }
  }],
  skills: [String], // Array of skills
  achievements: [String], // Array of achievements
  projects: [String], // Array of projects
  socialLinks: [{
    type: { type: String, required: true }, // Social link type, e.g., GitHub, LinkedIn
    url: { type: String, required: true }
  }],
  hobbies: [String] // Array of hobbies
}, {
  timestamps: true // Add createdAt and updatedAt fields
});

// Create the Resume model using the schema
const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume; // Export the Resume model
