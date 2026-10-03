const express = require('express');
const app = express();
const projectRouter = require('./routes/project.routes');
const errorMiddleware = require('./middlewares/error.middleware');
const rateLimiter = require('./middlewares/rateLimit.middleware');

require('dotenv').config({
    path: require('path').join(__dirname, '..', '.env')
});
app.use(
    rateLimiter(
        15 * 60 * 1000,
        100,
        "Too many requests, please try again later"
    )
);

app.use(express.json());
app.use('/api/v1/project',projectRouter);

app.use((req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found`);
    error.statusCode = 404;
    next(error);
});
app.use(errorMiddleware);

module.exports = app;