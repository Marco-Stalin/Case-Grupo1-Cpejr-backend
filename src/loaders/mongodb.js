const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect('mongodb+srv://marcosena:vYlhGCi4cwFKe196@aprendendo.o6aohhm.mongodb.net/?retryWrites=true&w=majority');
}
module.exports = startDB;