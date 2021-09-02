const JWT = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const token = authorization.split(" ")[1];
    const decoded = JWT.verify(token, process.env.JWT_TOKEN);

    const { username, userId } = decoded;
    req.username = username;
    req.userId = userId;
    next();
  } catch (e) {
    next("Authentication failure");
    next(e);
  }
};

module.exports = checkLogin;
