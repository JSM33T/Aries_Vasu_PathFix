const express = require('express');
const path = require('path');
const { createServer } = require('@vercel/node');

const app = express();

// Serve static files
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));
app.use('/vendors', express.static(path.join(__dirname, '../public/vendors')));

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = createServer(app);
