import jwt from 'jsonwebtoken';
import catchAsync from '../util/catchAsync';
import AppError from '../util/appError';
import User from '../models/userModel';

// Make JWT token
const createToken = (id) => jwt.sign({
  id,
},
process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES_IN,
});

const sendCreateToken = (user, status, res) => {
  const myToken = createToken(user._id);
  res.status(status).json({
    status: 'ok',
    token: myToken,
    user,
  });
};

export const signUp = catchAsync(async (req, res, next) => {
  res.setHeader('Content-type', 'application/json');

  const {
    name, email, password, passwordConfirm,
  } = req.body;

  if (!name) return next(new AppError('Provide your name.', 400));
  if (!email) return next(new AppError('Provide your email.', 400));
  if (!password) return next(new AppError('Provide your password.', 400));

  const createUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
  });

  try {
    createUser.password = undefined; // hide pass from response
    sendCreateToken(createUser, 201, res);
  } catch (error) {
    return next(
      new AppError(
        'Somthing problem here!!!',
        500,
      ),
    );
  }
});

export const logIn = catchAsync(async (req, res, next) => {
  res.setHeader('Content-type', 'application/json');

  const {
    email,
    password,
  } = req.body;

  // Check email and password exist
  if (!email || !password) {
    return next(
      new AppError(
        'provide email and password',
        400,
      ),
    );
  }

  // Check if user exists & password is correct
  const user = await User.findOne({
    email,
  }).select('+password');
  if (!user || !(await user.comparePassword(password, user.password))) {
    sendMessage(res, 401, 'Incorrect email or password');
  }

  try {
    // response data
    user.password = undefined; // hide pass from response
    sendCreateToken(user, 200, res);
  } catch (error) {
    return next(
      new AppError(
        'Somthing problem here!!!',
        500,
      ),
    );
  }
});

const sendMessage = (res, status, message) => {
  res.status(status).json({
    status: "failed",
    message: message
  });
};