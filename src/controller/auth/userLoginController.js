const { LoginServices } = require("../../services/user/LoginServices");
const userLogin = async (req, res) => {
  let result = await LoginServices(req)
  return res.status(200).json(result)
};
module.exports = { userLogin };
