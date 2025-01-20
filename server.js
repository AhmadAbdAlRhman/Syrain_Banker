const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const authRoutes = require('./routes/auth');
const {setupSocket} = require('./socket');

// Middleware
app.use(express.json());
// Middleware for parsing URL-encoded data
app.use(express.urlencoded({
    extended: true
}));
// Serve static files
app.use(express.static('public'));
// Routes
app.use('/auth', authRoutes);
//Model
require('./Models/linking');
const server = http.createServer(app);

// Setup Socket.IO
setupSocket(server);

const PORT = process.env.PORTSERVER || 5000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));