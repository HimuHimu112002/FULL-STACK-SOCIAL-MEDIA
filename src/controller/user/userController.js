const userModel = require("../../models/userModel");
const { userService } = require("../../sevices/userServices/userSevice");
const emailVelidation = require("../../utility/emailValidation");
const userValid = require("./userValidation");

const userCreate = async (req, res) => {
  //userValid(req.body)
  // return res.status(400).json({
  //   message: "hello"
  // })
  // let result = await userService(req);
  // return res.status(400).json(result);
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
    if (
      !FirstName ||
      !lastName ||
      !UserName ||
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
    } else {
      let findDuplicateEmail = await userModel.find({ email: email });

      if (findDuplicateEmail.length > 0) {
        return res.send({
          error: "This email already in used. Try another email",
        });
      } else if (
        FirstName &&
        lastName &&
        UserName &&
        email &&
        password &&
        birthdayMonth &&
        birthdayDay &&
        birthdayYear &&
        gender &&
        relagion
      ) {
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
