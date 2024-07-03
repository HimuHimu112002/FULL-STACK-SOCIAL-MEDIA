const { userVerifyServices } = require("../../services/user/userVerifyServices");
let tokenVerify = async (req, res) => {
  let result=await userVerifyServices(req);
  return res.status(200).json(result)
};
module.exports = {
  tokenVerify,
};
