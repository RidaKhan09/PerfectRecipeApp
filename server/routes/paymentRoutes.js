const express = require("express");
const router = express.Router();
const { createCheckoutSession } = require("../controllers/paymentController");
const { updateUserCoins } = require("../controllers/coinController");
const { verifyToken } = require("../middleware/auth"); // 🔐 your JWT middleware

router.post("/stripe/create-checkout-session", createCheckoutSession);


module.exports = router;
