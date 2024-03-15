const Role = require("../models/role")
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { respons } = require("../comon/respon");
var ObjectId = require('mongoose').Types.ObjectId; 

const authController = {
  //REGISTER
  registerUser: async (req, res) => {
    try {
      
      if (!req.body?.username) {
        return res.status(404).json(respons(404, "Username is requied"));
      }

      if (!req.body?.password) {
        return res.status(404).json(respons(404, "Password is requied"));
      }

      if (!req.body?.email) {
        return res.status(404).json(respons(404, "Email is requied"));
      }

      if (!req.body?.roleId) {
        return res.status(404).json(respons(404, "Role is requied"));
      }
      const nameExist = await User.findOne({username:req.body.username})
      if(nameExist){
        return res.status(404).json(respons(404, "Username is exsit "));
      }
      const emailExist = await User.findOne({email:req.body.email})
      if(emailExist){
        return res.status(404).json(respons(404, "Email is exsit "));
      }
      

      const hashed = await bcrypt.hash(req.body.password, 10);
      const role = await Role.findOne({
        _id: req.body.roleId,
      })

      //Create new user
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
        role: role
      });

      //Save user to DB
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  generateToken: (data, expired, key) => {
    return jwt.sign(
      {
        ...data
      },
      key,
      { expiresIn: expired }
    );
  },

  //LOGIN
  loginUser: async (req, res) => {
    try {
      const body = req.body
      // validate 

      if (!body?.username) {
        return res.status(404).json(respons(404, "Username is requied"));
      }

      if (!body?.password) {
        return res.status(404).json(respons(404, "Password is requied"));
      }

      // quenry 
      const user = await User.findOne({ username: req.body.username }).populate("role");
    
      if (!user) {
        return res.status(404).json(respons(404, "Account not exist"));
      }
      const validPassword = bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(404).json(respons(404, "Incorect password"));
      }
      const result = {username: user.username, role: user.role.name}
      //Generate access token
      const accessToken = authController.generateToken(result, "24h", process.env.SECRET_ACCESS_TOKEN);
      //Generate refresh token
      const refreshToken = authController.generateToken(result, "365d", process.env.SECRET_REFRESH_TOKEN);
      
      return res.status(200).json((respons(200, "Login successfully",{
        accessToken:accessToken,
        refreshToken:refreshToken
      }))); 
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  requestRefreshToken: async (req, res) => {
    //Take refresh token from user
    const refreshToken = req.cookies.refreshToken;
    //Send error if token is not valid
    if (!refreshToken) return res.status(401).json("You're not authenticated");
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh token is not valid");
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        console.log(err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      //create new access token, refresh token and send to user
      const newAccessToken = authController.generateAccessToken(user);
      const newRefreshToken = authController.generateRefreshToken(user);
      refreshTokens.push(newRefreshToken);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    });
  },

  //LOG OUT
  logOut: async (req, res) => {
    //Clear cookies when user logs out
    refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
    res.clearCookie("refreshToken");
    res.status(200).json("Logged out successfully!");
  },
};

module.exports = authController;
