// get home page
function getProducts(req, res, next) {
  // res.render("index");
  res.json({
    message: "This is products, welcome!!! :>",
  });
}

module.exports = {
  getProducts,
};
