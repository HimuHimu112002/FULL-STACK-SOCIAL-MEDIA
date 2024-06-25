function userValid(...val) {
  val.map((item) => {
    if (!item.FirstName) {
      console.log("hhhh", item.FirstName);
      // return { status: "fail", message: "First name require" };
      return false;
    }
  });
}
module.exports = userValid;
