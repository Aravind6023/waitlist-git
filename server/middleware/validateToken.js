const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { sendEmail } = require("./winnerMail");

const verifyToken = asyncHandler(async (req, res, next) => {
  const { referal_code } = req.params;

  try {
    const user = await User.findOne({ shortid: referal_code });

    if (!user) {
      res.status(404).json({ message: 'User not found with the provided referral token' });
      return;
    }

    if (referal_code) {
      (user.position > 1) ? user.position -= 1 : user.position = user.position;
      user.invites += 1;
      if (user.position == 1) {
        user.position = `Winner`;
        const subject = "Congratulations! Your position is now 1, and you have won a special prize";
        const couponCode = "12345";
        
        const text = `Dear Winner,
        
        Congratulations on achieving the top position! As a token of our appreciation, we're pleased to provide you with a special prize.
        
        Coupon Code: ${couponCode}
        
        Thank you for your participation and dedication. Enjoy your reward!
        
        Best regards,
        Aravind`;
        await sendEmail(user.email, subject, text);
      }

      await user.save();
    }

    next();
  } catch (error) {
    console.error('Error in verifyToken middleware:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = verifyToken;
