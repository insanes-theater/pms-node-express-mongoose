// external imports
const express = require("express");

// internal imports
const { getSalesOrders } = require("../controller/salesController");
//const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// router.get("/", decorateHtmlResponse("Login"), getLogin);
router.get("/", getSalesOrders);

module.exports = router;
