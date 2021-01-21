const projectsControllers = require("../controllers/Projects");
const authMiddleware = require("../middleware/auth");

module.exports = (app) => {
    app.use(authMiddleware);

    app.post("/registerProjects", projectsControllers.register);

    app.get("/getProjects", projectsControllers.getProjects);

    app.get("/getProject/:id", projectsControllers.getProject);

    app.put("/updateProject/:id", projectsControllers.update);

    app.delete("/deleteProject/:id", projectsControllers.delete);
};
