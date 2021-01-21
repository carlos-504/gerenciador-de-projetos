const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    commits: {
        type: Number,
        required: true,
    },
    publicationDate: {
        type: String,
        required: true,
    },
    contributors: {
        type: Number,
        required: true,
    },
    mainLanguage: {
        type: "String",
        required: true,
    },
    repositoryLink: {
        type: "String",
        required: true,
    },
});

module.exports = mongoose.model("Projects", projectsSchema);
