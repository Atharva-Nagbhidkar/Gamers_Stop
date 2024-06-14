const jwt = require("jsonwebtoken");
const User = require("../models/user-model")

const authMiddleware=async (req, res, next)=>{
    const token = req.header("Authorization"); //stores token from frontend in token variable

    if(!token){
        return res.status(401).json({msg:"Unauthorized HTTP, Token not provided"});
    }

    const jwtToken = token.replace("Bearer", "").trim(); // Removing the word "Bearer" from the token received from frontend; trim() method removes all blankspaces from the word.

    try {
        const isVerified = jwt.verify(jwtToken , process.env.JWT_SECRET_KEY);
        const userData = await User.findOne({email :isVerified.email}).select({password:0,});
        // stores all the data of the user in userData variable.
        // by using select method everything except the password will be stored in userData 
        
        // in express.js req(request) object is an object that contains info about the HTTP requet.By adding custom properties to req, you can pass info between middleware function or make it available in your route handler.

        //creating custom property
        req.user= userData;
        req.token=token;
        req.userID=userData._id;

        console.log(userData);
        next();
        
    } catch (error) {
        return res
        .status(401)
        .json({msg: "Invalid Token"});
    }

}

module.exports = authMiddleware;