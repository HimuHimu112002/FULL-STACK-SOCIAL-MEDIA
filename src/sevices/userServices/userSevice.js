const userModel = require("../../models/userModel");
const emailVelidation = require("../../utility/emailValidation");

const userService = async (req) => {
  try {
    const {
      FirstName,
      lastName,
      UserName,
      email,
      password,
      birthdayMonth,
      birthdayDay,
      birthdayYear,
      gender,
      relagion,
    } = req.body;
    if (!emailVelidation(email)) {
      res.send({ error: "Please Enter The Valid Email" });
    } else {
      let userinfo = new userModel({
        FirstName,
        lastName,
        UserName,
        email,
        password,
        birthdayMonth,
        birthdayDay,
        birthdayYear,
        gender,
        relagion,
      });
      userinfo.save();
      return { status: "success", message: "User Save Success" };
    }
  } catch (err) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

module.exports = {
  userService,
};
