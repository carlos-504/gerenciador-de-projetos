const express = require("express");
const app = express();
const bodyPaser = require("body-parser");

app.use(bodyPaser.urlencoded({ extended: true }));

const routers = require("../routers");
routers(app);

module.exports = app;
