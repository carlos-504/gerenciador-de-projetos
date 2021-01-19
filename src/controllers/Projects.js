const Projects = require("../model/Projects");

module.exports = {
    register: async (req, res) => {
        try {
            const project = await Projects.create(req.body);

            return res.send(req.body);
        } catch (erro) {
            return res.status(400).send("erro ao efetuar cadastro");
        }
    },

    getProjects: async (req, res) => {
        try {
            const projects = await Projects.find();

            return res.send(projects);
        } catch (erro) {
            return res.status(400).send("Erro ao efetuar cadastro");
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
};
