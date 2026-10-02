const express = require('express');
const app = express();
const projectRouter = require('./routes/project.routes');
require('dotenv').config({
    path: require('path').join(__dirname, '..', '.env')
});

app.use(express.json());
app.use('/api/v1/project',projectRouter);

module.exports = app;