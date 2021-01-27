const express = require("express");
const cors = require("cors");
const bodyPaser = require("body-parser");
const app = express();

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

app.use(
    cors({
        origin: true,
        credentials: true,
        exposedHeaders: ["set-cookie"],
    })
);
const routers = require("../routers");
routers(app);

module.exports = app;
