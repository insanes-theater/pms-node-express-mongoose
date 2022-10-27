// get home page
function getUsers(req, res, next) {
  // res.render("index");
  res.json({
    message: "This is Users, welcome!!! :>",
  });
}

module.exports = {
  getUsers,
};
