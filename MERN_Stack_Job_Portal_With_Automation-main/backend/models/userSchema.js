import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

// Create a user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must contain at least 3 characters."],
    maxLength: [30, "Name cannot exceed 30 characters."],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  niches: { // Domain priority wise
    firstNiche: {
      type: String,
      required: function() { return this.role === "Job Seeker"; }
    },
    secondNiche: {
      type: String,
      required: function() { return this.role === "Job Seeker"; }
    },
    thirdNiche: {
      type: String,
      required: function() { return this.role === "Job Seeker"; }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must contain at least 8 characters."],
    maxLength: [32, "Password cannot exceed 32 characters."],
    select: false
  },
  resume: { // Resume details
    public_id: String,
    url: String,
  },
  coverLetter: { // Self intro
    type: String,
    required: function() { return this.role === "Job Seeker"; }
  },
  hobbies: {
    type: String,
    required: function() { return this.role === "Job Seeker"; }
  },
  academicDetails_Overall: {
    type: Number,
    required: function() { return this.role === "Job Seeker"; }
  },
  Mathematics_Marks: {
    type: Number,
    required: function() { return this.role === "Job Seeker"; }
  },
  Science_Marks: {
    type: Number,
    required: function() { return this.role === "Job Seeker"; }
  },
  English_Marks: {
    type: Number,
    required: function() { return this.role === "Job Seeker"; }
  },
  Social_Marks: {
    type: Number,
    required: function() { return this.role === "Job Seeker"; }
  },
  schoolAchievement: {
    type: String,
    required: function() { return this.role === "Job Seeker"; }
  },
  extraCurriculars: {
    type: String,
    required: function() { return this.role === "Job Seeker"; }
  },
  role: {
    type: String,
    required: true,
    enum: ["Job Seeker", "Employer"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to get JWT token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export const User = mongoose.model("User", userSchema);
