const User = require("../model/User");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { validationResult } = require("express-validator");

let validationErrorFormatter = (error) => {
  return error.msg;
};

exports.signInPostController = async (req, res, next) => {
  let errors = validationResult(req).formatWith(validationErrorFormatter);
  let { name, username, email, password, gender, dateOfBirth } = req.body;

  if (!errors.isEmpty()) {
    return res.status(500).json({
      validationFailed: errors.mapped(),
    });
  }
  try {
    let hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      username,
      email,
      password: hashPassword,
      gender,
      dateOfBirth,
    });
    await newUser.save();

    res.status(200).json({
      success: "successfully Sign Up!!",
    });
  } catch (e) {
    res.status(500).json({
      failed: "Failed Sign Up😑😑",
    });
  }
};

exports.loginInPostController = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({
        message: "Auth failed",
      });
    }
    let passwordMatch = bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({
        message: "Auth failed",
      });
    }

    const token = JWT.sign(
      {
        username: user.username,
        userId: user._id,
      },
      process.env.JWT_TOKEN,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      access_token: token,
      success: "successfully log in 😎👻",
    });
  } catch (e) {
    res.status(500).json({
      failed: "Failed Sign Up😑😑",
    });
  }
};
