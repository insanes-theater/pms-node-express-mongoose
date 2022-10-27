// external imports
const express = require("express");

// internal imports
const { getHome } = require("../controller/homeController");
//const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// login page
// router.get("/", decorateHtmlResponse("Login"), getLogin);
router.get("/", getHome);

module.exports = router;
