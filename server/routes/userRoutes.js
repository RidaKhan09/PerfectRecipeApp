const router = require('express').Router(); // ✅ Required
const authMiddleware = require('../middlewares/auth');
const UserModel = require('../models/User');

router.post("/add-coins", authMiddleware, async (req, res) => {
  try {
    const { coins } = req.body;
    const userId = req.user._id;

    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.coins += coins;
    await user.save();

    res.json({ success: true, coins: user.coins, user });
  } catch (err) {
    console.error("Error in /add-coins:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router; // ✅ You had this part right
