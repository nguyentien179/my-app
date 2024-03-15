const authController = require("../controllers/AuthController");
const router = require("express").Router();
const { verifyToken } = require("../controllers/VerifyToken");

router.post("/register", authController.registerUser);
router.post("/refresh", authController.requestRefreshToken);
router.post("/login", authController.loginUser);
router.post("/logout", verifyToken, authController.logOut);
module.exports = router
