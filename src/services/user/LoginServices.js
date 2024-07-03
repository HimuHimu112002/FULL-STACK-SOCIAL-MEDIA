const { passwordValidationLength } = require("../../helper/passwordValidation");
const { EncodeUserToken } = require("../../helper/token");
const userRegistrationModel = require("../../models/userRegistrationModel");
const EmailSend = require("../../utility/emailSend");
const emailVelidation = require("../../utility/emailValidation");
const bcrypt = require("bcryptjs");

const LoginServices = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return { error: "Please Complete The All SignUp Field !" };
    } else if (!emailVelidation(email)) {
      return { error: "Enter The Valid User Email !" };
    } else if (!passwordValidationLength(password, 8, 12)) {
      return {
        message: "Password length should be minimum 8 and maximun 12",
      };
    } else {
      const emailExit = await userRegistrationModel.find({ email });
      const userEmail = await userRegistrationModel.findOne({ email });
      let user_id = await userRegistrationModel
        .find({ email: email })
        .select("_id");
      if (emailExit.length > 0) {
        if (userEmail) {
          if (userEmail.verified === false) {
            const tokenVerify = EncodeUserToken(
              email,
              user_id[0]["_id"].toString(),
              "5m"
            );
            EmailSend(email, tokenVerify);
          }
          if (userEmail.verified) {
            let token = EncodeUserToken(
              email,
              user_id[0]["_id"].toString(),
              "24h"
            );
            //res.cookie('token',token)
            bcrypt.compare(
              password,
              userEmail.password,
              function (err, result) {
                if (result) {
                  return {
                    status: "success",
                    message: "Login success",
                    token: token,
                  };
                } else {
                  return { status: "fail", message: "Wrong password" };
                }
              }
            );
          } else {
            return {
              status: "fail",
              message: "Unauthorized! Verify email address before login",
            };
          }
        }
      } else {
        return { status: "fail", message: "Email is not matching" };
      }
    }
  } catch (err) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

module.exports = {
  LoginServices,
};
