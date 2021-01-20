const userControllers = require("../controllers/User");

module.exports = (app) => {
    app.post("/userRegister", userControllers.register);

    app.get("/getUsers", userControllers.getUsers);

    app.get("/getUser/:id", userControllers.getUser);

    app.put("/updateUser/:id", userControllers.update);

    app.delete("/deleteUser/:id", userControllers.delete);

    app.post("/authenticate", userControllers.authenticate);
};
