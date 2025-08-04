const User = require('../models/User');

const getUser = async (req, res, next) => {
  const email = req.email;

  try {
    const findedUser = await User.findOne({ email: email });
    
    res
      .status(200)
      .json({
      message: 'success',
      status: true,
      user: {
        name: findedUser.name,
        email: findedUser.email,
        coins: findedUser.coins // 👈 this line added
      }
    });

  } catch (error) {
    next(error);
  }
};

module.exports = getUser;
