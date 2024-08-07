const AuthMiddleware = (req, res, next) => {
  console.log("Auth Middleware called");
  next();
};

module.exports = AuthMiddleware;
