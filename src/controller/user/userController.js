const { passwordValidationLength } = require("../../helper/passwordValidation");
const { validationLength } = require("./userNameValidation");
const userModel = require("../../models/userModel");
const emailVelidation = require("../../utility/emailValidation");
const bcrypt = require("bcryptjs");
const validationUserName = require("./userValidation");
const userCreate = async (req, res) => {
  try {
    const {
      FirstName,
      lastName,
      email,
      password,
      birthdayMonth,
      birthdayDay,
      birthdayYear,
      gender,
      relagion,
    } = req.body;
    if (
      !FirstName ||
      !lastName ||
      !email ||
      !password ||
      !birthdayMonth ||
      !birthdayDay ||
      !birthdayYear ||
      !gender ||
      !relagion
    ) {
      res.send({ error: "Please Complete The All User Field !" });
    } else if (!emailVelidation(email)) {
      res.send({ error: "Enter The Valid User Email !" });
    } else if (!validationLength(FirstName, 2, 30)) {
      return res.status(400).json({
        message: "Name length should be minimum 4 and maximun 30",
      });
    } else if (!passwordValidationLength(password, 8, 12)) {
      return res.status(400).json({
        message: "Password length should be minimum 8 and maximun 12",
      });
    } else {
      let findDuplicateEmail = await userModel.find({ email: email });

      if (findDuplicateEmail.length > 0) {
        return res.send({
          error: "This email already in used. Try another email",
        });
      } else if (
        FirstName &&
        lastName &&
        email &&
        password &&
        birthdayMonth &&
        birthdayDay &&
        birthdayYear &&
        gender &&
        relagion
      ) {
        let tempUserName = FirstName + lastName;
        let finalUserName = await validationUserName(tempUserName);
        const passHash = await bcrypt.hash(password, 10);
        let userinfo = new userModel({
          FirstName,
          lastName,
          FullName: tempUserName,
          UserName: finalUserName,
          email,
          password: passHash,
          birthdayMonth,
          birthdayDay,
          birthdayYear,
          gender,
          relagion,
        });
        userinfo.save();
        res.send({ status: "success", message: "User Save Success" });
      }
    }
  } catch (err) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

module.exports = {
  userCreate,
};
