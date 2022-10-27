// external imports
const express = require("express");

// internal imports
const { getProducts } = require("../controller/productsController");
//const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// router.get("/", decorateHtmlResponse("Login"), getLogin);
router.get("/", getProducts);

module.exports = router;
