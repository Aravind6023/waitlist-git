const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const User = require("../models/userModel");
const shortid = require('shortid');
const bcrypt = require("bcrypt");



const getAdminDetails = asyncHandler(async (req, res) => {
    const { uniqueid } = req.params;
  
    try {
      const user = await Admin.findOne({ uniqueid });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


const updateUsers = asyncHandler(async (req, res) => {
    const { uniqueid } = req.params;
    const updatedUserData = req.body;
  
    try {
      const user = await User.findOneAndUpdate({ uniqueid }, updatedUserData, {
        new: true,
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      console.error('Error updating user details:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


const deleteUser = asyncHandler(async (req, res) => {
    const { uniqueid } = req.params;
  
    try {
      const user = await User.findOneAndDelete({ uniqueid });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


  const createUser = asyncHandler(async (req, res) => {
    const { genid, name, email, password, phoneNumber } = req.body;
    const referralCode = shortid.generate();
    const defaultPosition = 99;
    const invites = 0;
  
    if (!name || !email || !password || !phoneNumber) {
      res.status(400).json({ error: "Please provide the required fields" });
      return;
    }
  
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400).json({ error: "User already registered!" });
      return;
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const userCount = await User.countDocuments();
    const position = userCount + defaultPosition;
  
    const userdetails = await User.create({
      uniqueid: genid,
      username: name,
      email: email,
      password: hashedPassword,
      phonenumber: phoneNumber,
      shortid: referralCode,
      position: position,
      invites: invites
    });
  
    console.log(`User created ${userdetails}`);
    if (userdetails) {
      res.status(201).json({
        uniqueid: userdetails.genid,
        username: userdetails.name,
        email: userdetails.email,
        phonenumber: userdetails.phoneNumber,
      });
    } else {
      res.status(400).json({ error: "User data is not valid" });
    }
  });
  












module.exports = { getAdminDetails, updateUsers, deleteUser, createUser };