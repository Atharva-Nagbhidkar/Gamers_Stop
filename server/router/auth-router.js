const express = require("express");
const authRouter = express.Router();
const authcontroller = require("../controllers/auth-controller");
const {signupSchema,loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware =require("../middlewares/auth-middleware")

authRouter
    .route("/")
    .get(authcontroller.home);

authRouter
    .route("/register")
    .post(validate(signupSchema),authcontroller.register); 

authRouter
    .route("/login")
    .post(validate(loginSchema),authcontroller.login);

authRouter
    .route("/user")
    .get(authMiddleware, authcontroller.user);

module.exports = authRouter;
