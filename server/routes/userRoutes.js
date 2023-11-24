const express = require("express");
const { createUser, loginUser, userList, generateLink, getIndividualUser } = require("../controllers/userController");
const verifyToken = require("../middleware/validateToken");

const router = express.Router();

router.post("/register", createUser);
router.post("/register/:referal_code", verifyToken, createUser);
router.post("/login", loginUser);
router.get("/getuserdetails", userList);
router.get("/generatelink/:uniqueid", generateLink);
router.get("/getindividualuser/:uniqueid", getIndividualUser)

module.exports = router;