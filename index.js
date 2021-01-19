const app = require("./src/config/customExpress");
const conn = require("./src/db/mongoose");

conn.then(() => {
    console.log("Conexão com mongo db realizada com sucesso");
    app.listen(8080, () => console.log("Servidor rodando na porta 8080"));
}).catch((erro) => console.log(`Errudo ${erro}`));
