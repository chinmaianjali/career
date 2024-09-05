const mongoose = require('mongoose');

const MCQSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String], // Define this as an array of strings
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

const MentorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  domain: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  school: {
    type: String
  },
  tenPlusTwo: {
    type: String
  },
  degree: {
    type: String
  },
  phd: {
    type: String
  },
  videos: [{
    videoUrl: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    domain: {
      type: String
    },
    experience: {
      type: Number
    },
    phd: {
      type: String
    },
    mcqs: [MCQSchema] // Embed the MCQ schema here
  }]
});

module.exports = mongoose.model('Mentor', MentorSchema);