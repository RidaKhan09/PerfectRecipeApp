const jwt = require('jsonwebtoken');
const util = require('util');
const verifyToken = util.promisify(jwt.verify);


const auth = async (req, res, next) => {
  try {
    const token =
  req.cookies.accessToken ||
  req.headers.authorization?.split(" ")[1];
    if (!token) {
      const error = new Error("Unauthorized ");
      error.statusCode = 403;
      throw error;
    }
    console.log("Cookies received:", req.cookies);


    const decoded = await verifyToken(token, process.env.ACCESS_TOKEN_KEY);
    req.user = decoded; // ✅ add this
    req.email = req.cookies.userEmail || decoded.email; // Get userEmail from cookies or token
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;

