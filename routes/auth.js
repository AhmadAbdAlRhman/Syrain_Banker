const express = require('express');
const { register, login, protectedRoute } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected route
router.get('/protected', verifyToken, protectedRoute);

module.exports = router;
