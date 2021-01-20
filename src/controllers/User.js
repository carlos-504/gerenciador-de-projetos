const bcrypt = require("bcryptjs");
const User = require("../model/User");

module.exports = {
    register: async (req, res) => {
        try {
            const { email } = req.body;

            if (await User.findOne({ email: email })) {
                return res.status(400).send({ message: "Email já registrado" });
            }

            const user = await User.create(req.body);
            user.password = undefined;

            return res.send({ user });
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
            return res.status(400).send({
                message: "Não foi possivel listar usuários",
                erro: erro,
            });
        }
    },

    getUser: async (req, res) => {
        try {
            const id = req.params.id;

            const user = await User.findOne({ _id: id });

            return res.send(user);
        } catch (erro) {
            return res.status(400).send({
                message: "Não foi possivel listar usuário",
                erro: erro,
            });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;

            await User.updateOne({ _id: id }, req.body);

            return res.send(req.body);
        } catch (erro) {
            return res.status(400).send({
                message: "Não foi possivel atualizar usuário",
                erro: erro,
            });
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            await User.deleteOne({ _id: id });

            res.send({ message: `Usuário com id ${id} excluído com sucesso` });
        } catch (erro) {
            return res.status(400).send({
                message: "Não foi possivel deletar usuário",
                erro: erro,
            });
        }
    },

    authenticate: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email }).select("+password");

            if (!user) {
                return res.status(400).send({ erro: "Usuário não encontrado" });
            }

            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {
                return res.status(400).send({ erro: "Senha inválida" });
            }

            user.password = undefined;

            return res.send({ user });
        } catch (erro) {
            return res.status(400).send({ erro: erro.message });
        }
    },
};
