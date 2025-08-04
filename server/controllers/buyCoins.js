const User = require('../models/User');

const buyCoins = async (req, res) => {
  const { coinsToAdd } = req.body;
  const email = req.email;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.coins += coinsToAdd;
    await user.save();

    console.log(`${coinsToAdd} coins added to ${email}`);

    res.status(200).json({ 
      success: true,               // ✅ required on frontend
      message: 'Coins added', 
      coins: user.coins,
      user                        // ✅ send full updated user object
    });
  } catch (err) {
    console.error("Add coin error:", err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = buyCoins;
