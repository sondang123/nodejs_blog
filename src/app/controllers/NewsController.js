const NewController = {
  // [get] / news
  index(req, res) {
    res.render("news");
  },
  /**
   * [get] detail news/:slug
   */
  show(req, res) {
    res.send("detail");
  },
};
module.exports = NewController;
