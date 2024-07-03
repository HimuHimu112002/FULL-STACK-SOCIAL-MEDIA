const userRegistrationModel = require("../../models/userRegistrationModel");
const userVerifyServices = async (req, res) => {
  try {
    await userRegistrationModel.findOneAndUpdate({ verified: true });
    return { status: "success", message: "user verified" };
  } catch (e) {
    return {
      status: "fail",
      message: "Something Went Wrong",
      error: e.toString(),
    };
  }
};
module.exports = {
  userVerifyServices,
};
