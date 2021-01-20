const projects = require("./Projects");
const user = require("./User");

module.exports = (app) => {
    projects(app);
    user(app);
};
