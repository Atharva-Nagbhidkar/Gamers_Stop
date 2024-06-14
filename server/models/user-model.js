const mongoose = require("mongoose");
const bcrypt =require("bcryptjs"); // Encrypt Password
const jwt = require("jsonwebtoken"); //JSON web token; authenticates if user us correct one

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },

    email:{
        type:String,
        require:true,
    },

    phone:{
        type:String,
        require:true,
    },

    password:{
        type:String,
        require:true,
    },

    isAdmin:{
        type:Boolean,
        default:false,
    },
});

// Secure Password with bcrypt (Below function is a middleware)
// pre is a method that runs before saving a model of the schema
userSchema.pre('save', async function(){
    console.log("pre method",this); // display the data when using the pre method; before saving to the database
    const user = this; // saved all value data fields in user

    if(!user.isModified("password")){ // If password not changed or previously created then we need not encrypt
        next();
    }

    //encrypt password if newly created
    try{
        const saltRound=await bcrypt.genSalt(10); //Defines the complexity of the hash password
        const hash_password=await bcrypt.hash(user.password,saltRound); //Used to encrypt the password
        user.password=hash_password;
    }
    catch(error){
        next(error);
    }

});

//JSON Web Token
// .methods can be used to create functions that can be accessed anywhere in controller
userSchema.methods.generateToken = async function(){ 
    try {
        return jwt.sign({
            // payload  info about the user
            // the data we add below is retured when the jwt is verified
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY, // to verify
        {
            expiresIn: "30d", //Token expires in 30 days
        }
    );

    } catch (error) {
        console.error(error);
    }
};

//Compare Password
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}


// Define the model or collection name
const User = new mongoose.model("User",userSchema);
module.exports = User;