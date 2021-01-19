const projectsControllers = require("../controllers/Projects");

module.exports = (app) => {
    app.post("/registerProjects", projectsControllers.register);

    app.get("/getProjects", projectsControllers.getProjects);
};
