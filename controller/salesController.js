// get home page
function getSalesOrders(req, res, next) {
  // res.render("index");
  res.json({
    message: "This is Sales Orders, welcome!!! :>",
  });
}

module.exports = {
  getSalesOrders,
};
