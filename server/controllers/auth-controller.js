const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("This is Home Page");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body; // get data in body

    const userExist = await User.findOne({ email: email }); // first email is the attribute name in database, the second one is the email variable in userExist

    if (userExist) {
      return res.status(400).json({ message: "Email Already Exist" });
    }

    // Hash the password
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(), // _id represented as string
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body; // get data in body

    const userExist = await User.findOne({ email });
    console.log("User Exist:",userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// To send user data
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log("Error from User route");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { home, register, login, user };
