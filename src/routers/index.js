const projects = require("./Projects");
const user = require("./User");

module.exports = (app) => {
    user(app);
    projects(app);
};
