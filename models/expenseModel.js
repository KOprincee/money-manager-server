const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  amount: {
    type: Number,
    required: [true, 'Please enter amount'],
  },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
