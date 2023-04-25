const express = require("express");
const handlebars = require("express-handlebars").engine;
const path = require("path");
const morgan = require("morgan");

const app = express();
const port = 3002;
app.use(express.static(path.join(__dirname, "public")));
//http logger
app.use(morgan("combined"));

// template engine

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  // return res.send(`<h1 style="color:red";>xin Chào</h1>`);
  res.render("news");
});

// query parameters
app.get("/search", (req, res) => {
  res.render("search");
  // return res.send(req.query.q);
});
app.post("/search", (req, res) => {
  res.render("search");
  // return res.send(req.query.q);
});
// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
