// src/server.js
const express = require('express');
const path = require('path');
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');

const app = express();
const PORT = 3000;

// Log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Serve static files from the 'views' folder
app.use(express.static(path.join(__dirname, 'views')));

// Use routes
app.use('/', indexRoute);
app.use('/', aboutRoute);

// Handle 404
app.use((req, res) => {
    res.status(404).sendFile('error.html', { root: path.join(__dirname, 'views') });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
