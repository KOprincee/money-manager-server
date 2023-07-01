const Expense = require('../models/expenseModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createExpense = catchAsync(async (req, res) => {
  const newExpense = await Expense.create(req.body);

  res.status(201).json({
    status: 'success',
  });
});

exports.getExpenseById = catchAsync(async (req, res, next) => {
  console.log(req.params.id);
  const expense = await Expense.find({ user_id: req.params.id });

  if (!expense) {
    return next(new AppError('No expenses found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      expense,
    },
  });
});
