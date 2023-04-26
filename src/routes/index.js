const newRouter = require("./news");
const siteRouter = require("./site");
const route = (app) => {
  // action => Dispatcher => handlers
  app.use("/news", newRouter);
  app.use("/", siteRouter);

  // đăng nhập
  app.get("/login", (req, res) => {
    res.render("login");
    // return res.send(req.query.q);
  });
};

module.exports = route;
