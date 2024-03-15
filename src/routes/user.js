const userController = require("../controllers/UserController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
  verifyTokenAdmin,

} = require("../controllers/VerifyToken");

const router = require("express").Router();
//GET ALL USERS
router.get("/", verifyTokenAdmin, userController.getAllUsers);

//DELETE USER
router.delete("/:id", verifyTokenAndAdmin, userController.deleteUser);

module.exports = router;