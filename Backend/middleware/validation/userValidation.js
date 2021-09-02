const { check } = require("express-validator");
const User = require("../../model/User");

const UserSignValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name can not be empty")
    .isLength({ max: 30, min: 2 })
    .withMessage("Name can not less then 2 character"),
  check("username")
    .not()
    .isEmpty()
    .withMessage("Username can not be empty")
    .isLength({ max: 20, min: 4 })
    .withMessage("Username can not less then 4 character")
    .custom(async (username) => {
      try {
        let user = await User.findOne({ username });
        if (user) {
          throw new Error("try other username");
        }
      } catch (e) {
        throw new Error(e.message);
      }
    }),
  check("password")
    .not()
    .isEmpty()
    .withMessage("password can not be empty")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long & should contain ad least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
    ),
  check("email")
    .not()
    .isEmpty()
    .withMessage("password can not be empty")
    .isEmail()
    .withMessage("Please provide a valid email ")
    .custom(async (email) => {
      try {
        let user = await User.findOne({ email });
        if (user) {
          throw new Error("try other email");
        }
      } catch (e) {
        throw new Error(e.message);
      }
    })
    .trim(),
  check("gender").not().isEmpty().withMessage("Gender can not be empty").trim(),
  check("dateOfBirth")
    .not()
    .isEmpty()
    .withMessage("Date Of Birth can not be empty"),
];

module.exports = UserSignValidator;
