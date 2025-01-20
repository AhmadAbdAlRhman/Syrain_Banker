const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Mock user database (replace with a real database)
const users = [];

// User registration
const register = async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).send({ message: 'User registered successfully!' });
};

// User login
const login = async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    console.log(user);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
    res.send({ token });
};

// Protected route
const protectedRoute = (req, res) => {
    res.send({ message: `Welcome, ${req.user.username}! This is a protected route.` });
};

module.exports = { register, login, protectedRoute };
