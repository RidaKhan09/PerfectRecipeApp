const express = require('express');
const register = require('../controllers/resgister');
const login = require('../controllers/login');
const getUser = require('../controllers/getUser');
const auth = require('../middleware/auth');
const logout=require('../controllers/logout');
const getAccess = require('../controllers/getAccess');
const buyCoins = require('../controllers/buyCoins');
const { createCheckoutSession } = require("../controllers/paymentController");
const verifyToken = require("../middleware/auth"); // or whatever your file is
const router = express.Router(); 

router.post('/register', register);     //to register a user
router.post('/login', login);
router.get('/profile', auth,getUser);
router.get("/logout", logout);
router.get('/access',verifyToken,getAccess);
router.post('/buy-coins', auth, buyCoins);
router.post("/create-checkout-session", createCheckoutSession);



module.exports = router;
