// src/routes/about.js
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
});

module.exports = router;
