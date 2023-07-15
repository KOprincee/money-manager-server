const express = require('express');
const expenseController = require('./../controllers/expenseController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/', authController.protect, expenseController.createExpense);
router
  .get('/:id', authController.protect, expenseController.getExpenseById)
  .delete('/:id', authController.protect, expenseController.deleteExpenseById);

module.exports = router;
