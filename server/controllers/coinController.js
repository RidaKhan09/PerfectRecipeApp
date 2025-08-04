const User = require("../models/User");

const updateUserCoins = async (req, res) => {
  const userId = req.userId; // 🛡 assuming you have middleware that sets this
  const { coins } = req.body;

  if (!userId || !coins) return res.status(400).json({ error: "Missing data" });

  try {
    const user = await User.findById(userId);
    user.coins += parseInt(coins);
    await user.save();
    res.status(200).json({ user });
  } catch (err) {
    console.error("Failed to update coins", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { updateUserCoins };

