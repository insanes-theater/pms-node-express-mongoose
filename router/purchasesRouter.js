// external imports
const express = require("express");

// internal imports
const { getPurchaseOrders } = require("../controller/purchasesController");
//const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// router.get("/", decorateHtmlResponse("Login"), getLogin);
router.get("/", getPurchaseOrders);

module.exports = router;
