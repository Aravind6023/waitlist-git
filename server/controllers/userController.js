const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Admin = require("../models/adminModel");
const shortid = require('shortid');


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

  if (!referralCode) {
    res.status(500).json({ error: "Failed to generate unique short ID" });
    return;
  }

  const duplicateShortId = await User.findOne({ shortid: referralCode });
  if (duplicateShortId) {
    res.status(500).json({ error: "Generated short ID is not unique" });
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



const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required fields.' });
  }

  console.log('Input:', email, password);

  try {
    let user = await User.findOne({ email });
    console.log('User:', user);

    if (!user) {
      user = await Admin.findOne({ email });
      console.log('Admin:', user);
    }

    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        let redirectUrl;

        if (user instanceof Admin) {
          // Set a different redirect URL for admin users
          redirectUrl = '/admin/home/' + user.uniqueid;
        } else {
          // Set the default redirect URL for regular users
          redirectUrl = '/home/' + user.uniqueid;
        }

        return res.status(200).json({ user, redirectUrl });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      return res.status(404).json({ message: "User's not found." });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});








// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required fields.' });
//   }

//   console.log('Input:', email, password);

//   try {
//     let user = await User.findOne({ email });
//     console.log('User:', user);

//     if (!user) {
//       user = await Admin.findOne({ email });
//       console.log('Admin:', user);
//     }

//     if (user) {
//       const isPasswordMatch = await bcrypt.compare(password, user.password);

//       if (isPasswordMatch) {
//         const redirectUrl = '/home/' + user.uniqueid;
//         return res.status(200).json({ user, redirectUrl });
//       } else {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
//     } else {
//       return res.status(404).json({ message: "User's not found." });
//     }
//   } catch (error) {
//     console.error('Error during login:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// });


const generateLink = asyncHandler( async (req, res) => 
{
  const { uniqueid } = req.params;

  try {
    const user = await User.findOne({ uniqueid });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const generatedLink = `http://localhost:3000/register/${user.shortid}`;
    res.status(200).json({ generatedLink });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }

})


const userList = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ success: true, data: users });
});


const getIndividualUser = asyncHandler(async (req, res) => {
  const { uniqueid } = req.params;

  try {
    const user = await User.findOne({ uniqueid });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = { createUser, loginUser, userList, generateLink, getIndividualUser };
