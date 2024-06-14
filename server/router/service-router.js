const express = require("express");
const serviceRouter = express.Router();
const services = require("../controllers/service-controller");

serviceRouter
    .route("/service")
    .get(services);

module.exports = serviceRouter; 