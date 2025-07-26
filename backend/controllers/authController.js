// backend/controllers/authController.js

const bcrypt = require('bcryptjs');
const jwt = 'jsonwebtoken';
// Import the Prisma Client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient(); // Initialize it

// --- Controller for User Registration (with Prisma) ---
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // --- (Validations are the same) ---
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please enter all fields.' });
    }

    // Check if user exists IN THE DATABASE
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user IN THE DATABASE
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: 'User registered successfully!',
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during registration.' });
  }
};

// --- Controller for User Login (with Prisma) ---
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password.' });
    }

    // Find the user IN THE DATABASE
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials. User not found.' });
    }

    // --- (Rest of the logic is the same) ---
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials. Password incorrect.' });
    }
    
    // ... JWT signing logic ...
    // ...

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during login.' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};