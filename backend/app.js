const express = require('express');
// const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();


app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;
