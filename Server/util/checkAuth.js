const jwt = require("jsonwebtoken");
ACCESSTOKEN = process.env.ACCESSTOKEN;

exports.checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization; 
    console.log(token, "token received");

    if (!token) {
      return res.json({
        message: "Access denied",
      });
    }

    const validToken = jwt.verify(token, process.env.ACCESSTOKEN);

    console.log(validToken._id);
    req.userId = validToken._id;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};
