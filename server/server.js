require("dotenv").config(); // Enables usage of .env file in the program
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb=require("./utils/db.js");
const authRouter = require("./router/auth-router.js");
const contactRouter = require("./router/contact-router.js")
const serviceRouter = require("./router/service-router.js")
const adminRoute = require("./router/admin-router.js")
const errorMiddleware= require("./middlewares/error-middleware.js");


//Handling CORS Policy
//CORS :Cross Origin Resource Sharing is a security feature implemented by web browser to restrict web pages from naming requests to a different domain than the one that served the webpage.
const corsOptions={
    origin:"http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOptions));

app.use(express.json()); // Helps in parsing json data for postman

app.use("/api/auth",authRouter);
app.use("/api/form",contactRouter);
app.use("/api/game",serviceRouter);

app.use("/api/admin",adminRoute);

app.use(errorMiddleware);

const PORT=5500;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running at PORT: ${PORT}`);
    })
});
