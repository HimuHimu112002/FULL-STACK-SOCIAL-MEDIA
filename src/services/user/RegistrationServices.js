const { passwordValidationLength } = require("../../helper/passwordValidation");
const userRegistrationModel = require("../../models/userRegistrationModel");
const emailVelidation = require("../../utility/emailValidation");
const bcrypt = require("bcryptjs");

const RegistrationServices = async (req, res) => {
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
      let findDuplicateEmail = await userRegistrationModel.find({
        email: email,
      });
      if (findDuplicateEmail.length > 0) {
        return {
          error: "This email already in used. Try another email",
        };
      } else if (email && password) {
        const passHash = await bcrypt.hash(password, 10);
        let signup = new userRegistrationModel({
          email,
          password: passHash,
        });
        signup.save();
        res.send({ status: "success", message: "Sign-Up Success" });
      }
    }
  } catch (err) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};
module.exports = {
  RegistrationServices,
};
