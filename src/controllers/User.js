const User = require("../model/User");

module.exports = {
    register: async (req, res) => {
        try {
            const { email } = req.body;

            if (await User.findOne({ email: email })) {
                return res.status(400).send({ message: "Email já registrado" });
            }

            const user = await User.create(req.body);

            return res.send(req.body);
        } catch (erro) {
            return res.status(400).send({
                message: "Não foi possível cadastrar o usuário",
                erro: erro,
            });
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await User.find();

            return res.send(users);
        } catch (erro) {
            return res
                .status(400)
                .send({
                    message: "Não foi possivel lisar usuários",
                    erro: erro,
                });
        }
    },
};
