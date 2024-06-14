const express = require("express");
const contactRouter = express.Router();
const contactForm = require("../controllers/contact-controller");

contactRouter
    .route("/contact")
    .post(contactForm.contactForm);

module.exports = contactRouter;
