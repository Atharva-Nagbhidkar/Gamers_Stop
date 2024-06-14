const { z } = require("zod");// Validate data

//Create an object schema
const loginSchema = z.object({
    email: z
    .string({required_error: "Email is Required"})
    .trim() // Remove blank spaces
    .email({message:"Invalid email address"})
    .min (3,{message: "Email must be of atleast 3 characters "})
    .max(255,{message: "Email can't be more than 255 characters "}),

    password: z
    .string({required_error: "Password is Required"})
    .trim()
    .min (7,{message: "Password must be of atleast 6 characters "})
    .max(255,{message: "Password can't be more than 255 characters "}),
})

//Extend the loginSchema
const signupSchema= loginSchema.extend({
    username: z
    .string({required_error: "Name is Required"})
    .trim()
    .min (3,{message: "Name must be of atleast 3 characters "})
    .max(255,{message: "Name can't be more than 255 characters "}),

    phone: z
    .string({required_error: "Phone is Required"})
    .trim()
    .min (10,{message: "Phone must be of atleast 10 characters "})
    .max(20,{message: "Phone can't be more than 255 characters "}),
});

module.exports = {signupSchema,loginSchema};