//const userModel = require("../../models/userModel");

// function userValid(...val) {
//   val.map((item) => {
//     if (!item.FirstName) {
//       return { status: "fail", message: "First name require" };
//     }
//   });
// }
// module.exports = userValid;

const validationUserName = async (username) => {
  username += (+new Date() * Math.random()).toString().substring(0, 1);
  // let isTrue = false
  // do{
  //   let user = await userModel.findOne({UserName: username})
  //   if(user){
  //     username +=(+new Date() * Math.random()).toString().substring(0,1)
  //     isTrue = true
  //   }else{
  //     isTrue = false
  //   }
  // }while(isTrue)
  return username;
};
module.exports = validationUserName;
