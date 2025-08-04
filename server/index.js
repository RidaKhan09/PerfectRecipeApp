const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const getConnection = require('./utils/getConnection');
const googleAuth = require('./middleware/googleAuth');
const userRoutes = require ('./routes/user');
const errorHandler = require('./middleware/errorHandler')
const aiRoutes= require('./routes/aiRoutes.js')

const { get } = require('mongoose');
const app = express();
const recipeRoutes = require("./routes/recipeRoutes.js");

// Enable CORS for frontend
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Google Auth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5050/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log(profile)
      return done(null, profile); // ✅ typo fix: 'done' not 'document'
    }
  )
);

// Serialize/Deserialize
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Routes
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account',
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:5173/login',
  }),
  googleAuth,
  (req, res,next) => {
    // ✅ redirect to frontend on success
    res.redirect('http://localhost:5173/');
  }
);
//user//register


const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api', paymentRoutes); // or just '/' if you want

app.use("/user",userRoutes);
app.use(errorHandler);

app.use(express.json());
app.use("/api/recipes", recipeRoutes);

getConnection();
// Start server
app.listen(process.env.PORT, () =>
  console.log(`✅ Server is running on port: ${process.env.PORT}`)
);

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("MongoDB error ❌", err));
