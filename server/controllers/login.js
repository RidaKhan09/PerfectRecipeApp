const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcrypt');
const isSecure = process.env.NODE_ENV === 'production';

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const findedUser = await User.findOne({ email: email });
    if (!findedUser) {
      const error = new Error('No user found');
      error.statusCode = 400;
      throw error;
    }

    const isPassMatch = await bcrypt.compare(password, findedUser.password);
    if (!isPassMatch) {
      const error = new Error('Incorrect password');
      error.statusCode = 400;
      throw error;
    }

    const accessToken = generateToken(findedUser.email);

    // Set userEmail cookie
    res.cookie('userEmail', findedUser.email, {
        httpOnly: true,  
        secure: isSecure,  // Adjust based on the environment
        sameSite: 'Lax',
        expires: new Date(Date.now() + 3600000),  // Cookie expires in 1 hour
      });

    // Set accessToken cookie
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: true,  // Adjust based on the environment
        sameSite: 'Lax',
      });

    res.status(200).json({
      message: 'Login successful',
      token: accessToken,  // Send token back
      user: {
        id: findedUser._id,
        name: findedUser.name,
        email: findedUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
