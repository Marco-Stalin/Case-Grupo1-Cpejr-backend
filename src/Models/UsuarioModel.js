const mongoose= require("mongoose")

const Schema= mongoose.Schema;

const UsuarioSchema = new Schema({
    email: {
      type: String,
      unique: true, //mongo vai entender que o email precisa ser único na coleção de usuários
    }, //ou seja, se alguém tentar criar um usuário com um email que já existe no sistema, o mongo vai jogar um erro
    nome:  {    
      type: String,
      unique: true, 
    },
    senha:String,
    cargo:String,
    status: String
})

const UsuarioModel=mongoose.model('usuarios', UsuarioSchema);

module.exports= UsuarioModel;