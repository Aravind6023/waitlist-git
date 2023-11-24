const express = require("express");
const { getAdminDetails, updateUsers, deleteUser, createUser } = require("../controllers/adminController");
const { userList } = require("../controllers/userController");

const router = express.Router();

router.get("/getuserdetails", userList);
router.get("/getindividualadmin/:uniqueid", getAdminDetails);
router.put('/updateuser/:uniqueid', updateUsers);
router.delete('/deleteuser/:uniqueid', deleteUser);
router.post("/register", createUser);

module.exports = router;

