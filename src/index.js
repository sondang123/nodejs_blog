const express = require("express");
const handlebars = require("express-handlebars").engine;
const path = require("path");
const morgan = require("morgan");
const router = require("./routes");

const app = express();
const port = 3002;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); /**middleware */ // gửi qua form mặc định
app.use(express.json()); /**middleware */ // gửi qua fetch
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

//  routes init
router(app);

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
