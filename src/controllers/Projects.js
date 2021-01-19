const Projects = require("../model/Projects");

module.exports = {
    register: async (req, res) => {
        try {
            const { title } = req.body;

            if (await Projects.findOne({ title: title })) {
                return res
                    .status(400)
                    .send({ erro: "Nome de projeto já registrado" });
            }

            const project = await Projects.create(req.body);

            return res.send(req.body);
        } catch (erro) {
            return res
                .status(400)
                .send({ message: "Erro ao cadastrar projeto", erro: erro });
        }
    },

    getProjects: async (req, res) => {
        try {
            const projects = await Projects.find();

            return res.send(projects);
        } catch (erro) {
            return res
                .status(400)
                .send({ message: "Erro ao listar projetos", erro: erro });
        }
    },

    getProject: async (req, res) => {
        try {
            const id = req.params.id;

            const project = await Projects.findOne({ _id: id });

            return res.send(project);
        } catch (erro) {
            return res
                .status(400)
                .send({ message: "Erro ao buscar Projeto", erro: erro });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;
            const { title } = req.body;

            if (await Projects.findOne({ title: title })) {
                return res
                    .status(400)
                    .send({ erro: "Nome de projeto já registrado" });
            }

            const project = await Projects.updateOne({ _id: id }, req.body);

            return res.send(req.body);
        } catch (erro) {
            return res
                .status(400)
                .send({ message: "Erro ao atualizar projeto", erro: erro });
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            await Projects.deleteOne({ _id: id });

            return res.send({ message: `Projeto ${id} excluído com sucesso` });
        } catch (erro) {
            return res
                .status(400)
                .send({ message: "Erro ao excluir o projeto", erro: erro });
        }
    },
};
