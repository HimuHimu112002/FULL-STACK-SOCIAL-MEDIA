const { RegistrationServices } = require("../../services/user/RegistrationServices");
const userSignUp = async (req, res) => {
  let result = await RegistrationServices(req)
  return res.status(200).json(result)
};
module.exports = { userSignUp };
