const router = require("express").Router();
const checkLogin = require("../middleware/checkLogin");
const UserSignValidator = require("../middleware/validation/userValidation");

const {
  signInPostController,
  loginInPostController,
} = require("../controller/authController");
router.get("/", checkLogin, (req, res) => {
  res.json({
    msg: "JWT IS WORK",
    username: req.username,
    userId: req.userId,
  });
});
router.post("/sign", UserSignValidator, signInPostController);
router.post("/login", loginInPostController);

module.exports = router;
