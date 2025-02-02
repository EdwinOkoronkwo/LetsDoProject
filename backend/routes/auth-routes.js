const express = require("express");
const router = express.Router();
const { userSignupValidator } = require("../validators");

const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth-controller");

router.post("/signup", userSignupValidator, signup);
//router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
