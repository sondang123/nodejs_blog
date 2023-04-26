const SiteController = {
  // [get] / Home
  index(req, res) {
    res.render("home");
  },
  /**
   * [get] /search
   */
  search(req, res) {
    res.send("search");
  },
};
module.exports = SiteController;
