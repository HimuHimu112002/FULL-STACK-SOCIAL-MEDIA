const { DecodeUserToken } = require("../helper/token");

const auth = async (req, res, next) => {
  let token = req.headers["token"];
  let tokenVerify = req.params["token"];
  if (!token) {
    // token = req.cookies['token']
    if (req.cookies && req.cookies["token"]) {
      token = req.cookies["token"];
    }
  }
  // Token Decode
  let decoded = DecodeUserToken(token || tokenVerify);
  // Request Header Email+UserID Add
  if (decoded === null) {
    return res.status(401).json({ status: "fail", message: "Unauthorized" });
  } else {
    let email = decoded["email"];
    let user_id = decoded["user_id"];
    req.headers.email = email;
    req.headers.user_id = user_id;
    next();
  }
};
module.exports = auth;
