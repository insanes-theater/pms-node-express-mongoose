// get home page
function getPurchaseOrders(req, res, next) {
  // res.render("index");
  res.json({
    message: "This is Purchase Orders, welcome!!! :>",
  });
}

module.exports = {
  getPurchaseOrders,
};
