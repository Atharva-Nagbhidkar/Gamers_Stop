const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

adminRouter
    .route("/users")
    .get(authMiddleware,adminMiddleware,adminController.getAllUsers);


//get data of single user
adminRouter
    .route("/users/:id")
    .get(authMiddleware,adminMiddleware,adminController.getUserById);

adminRouter
    .route("/users/update/:id")
    .patch(authMiddleware,adminMiddleware,adminController.updateUserById);


//delete data
adminRouter
    .route("/users/delete/:id")
    .delete(authMiddleware,adminMiddleware,adminController.deleteUserById)

//delete contact
adminRouter
    .route("/contacts/delete/:id")
    .delete(authMiddleware,adminMiddleware,adminController.deleteContactById)

adminRouter
    .route("/contacts")
    .get(authMiddleware,adminMiddleware,adminController.getAllContacts);

module.exports = adminRouter;