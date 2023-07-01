const express = require('express');
const expenseController = require('./../controllers/expenseController');

const router = express.Router();

router.post('/', expenseController.createExpense);
router.get('/:id', expenseController.getExpenseById);

module.exports = router;
