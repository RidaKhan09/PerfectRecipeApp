const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const getConnection = require("./utils/getConnection");
const googleAuth = require("./middleware/googleAuth");
const userRoutes = require("./routes/user");
const errorHandler = require("./middleware/errorHandler");
const aiRoutes = require("./routes/aiRoutes.js");
const recipeRoutes = require("./routes/recipeRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// ✅ Allowed origins from env (fallback to localhost + deployed frontend)
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  "http://localhost:5173", // keep for dev
];

app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        process.env.FRONTEND_URL,
        "http://localhost:5173",
      ];
      if (!origin) return callback(null, true);
      if (allowedOrigins.some((url) => origin.startsWith(url))) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// ✅ Google Auth Strategy with dynamic callback
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL, // use env
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

// Serialize/Deserialize
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Routes
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.FRONTEND_URL}/login`,
  }),
  googleAuth,
  (req, res) => {
    res.redirect(process.env.FRONTEND_URL); // ✅ redirect to frontend dynamically
  }
);

// API routes
app.use("/api", paymentRoutes);
app.use("/user", userRoutes);
app.use("/api/recipes", recipeRoutes);
app.use(errorHandler);

// MongoDB connection
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB error ❌", err));

getConnection();

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
  console.log(`✅ Server is running on port: ${PORT}`)
);
