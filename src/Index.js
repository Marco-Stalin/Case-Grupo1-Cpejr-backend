const app= require("./App");
const loaders = require("./loaders/index");

loaders.start();
app.listen(8000, ()=> console.log("Servidor Rodando"));
