// external imports
const express = require("express");

// internal imports
const { getUsers } = require("../controller/usersController");
//const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// router.get("/", decorateHtmlResponse("Login"), getLogin);
router.get("/", getUsers);

module.exports = router;
