// get home page
function getHome(req, res, next) {
  // res.render("index");
  res.json({
    message: "This is home, welcome!!! :>",
  });
}

module.exports = {
  getHome,
};
