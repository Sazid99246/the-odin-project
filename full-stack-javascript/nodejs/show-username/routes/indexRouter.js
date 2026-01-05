const express = require("express");
const indexROuter = express.Router();

const userController = require("../controllers/userControllers");

indexROuter.get("/", userController.getIndex);
indexROuter.get("/new", userController.getNewUserForm);
indexROuter.post("/new", userController.createNewUser);

module.exports = indexROuter;