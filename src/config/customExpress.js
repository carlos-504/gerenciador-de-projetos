const express = require("express");
const cors = require("cors");
const bodyPaser = require("body-parser");
const app = express();

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    app.use(cors());

    next();
});

const routers = require("../routers");
routers(app);

module.exports = app;
