const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRouter');
const expenseRouter = require('./routes/expenseRouter');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// 2) ROUTES

app.use('/money-manager/users', userRouter);
app.use('/money-manager/expense', expenseRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
