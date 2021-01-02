import express from 'express';
import Router from './router/router';
import AppError from './util/appError';
import globalErrorHandler from './controllers/errorController';

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api', Router);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
