const userControllers = require("../controllers/User");

module.exports = (app) => {
    app.post("/userRegister", userControllers.register);

    app.get("/getUsers", userControllers.getUsers);
};
