const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.updateBudget = catchAsync(async (req, res) => {
  console.log(req);
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    status: 'success',
  });
});
