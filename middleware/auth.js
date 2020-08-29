const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token from header
  // x-auth-token is the key to the token inside of the header
  const token = req.header("x-auth-token");

  // Check if not token doesn't exist
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // If token exists, verify the token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // assign the user and pull out the payload
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
