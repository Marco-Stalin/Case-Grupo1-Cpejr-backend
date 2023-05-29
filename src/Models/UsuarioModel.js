const mongoose= require("mongoose")
const bcrypt = require("bcrypt");
const SessoesModel = require("./SessoesModel");
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
    senha:{
      type: String,
      select: false, // quando dermos o get a senha n retornará

    },
    cargo:String,
    status: String
})

UsuarioSchema.pre("save", async function (next){
  const usuario = this;
if (usuario.isModified("senha")){
   const salt = await bcrypt.genSalt(); //função salt gera um conjunto aleatorio de caracteres que serao base da criptografia da senha
   const hash = await bcrypt.hash(usuario.senha, salt); //senha criptografada (combinação aleatoria dos caracteres do salt)
   usuario.senha= hash;



}

  next()
})

UsuarioSchema.pre("deleteOne", {document: true, query: false}, async function(){
    const usuario = this;

return SessoesModel.deleteOne({id_usuario: usuario._id});
});


const UsuarioModel=mongoose.model('usuarios', UsuarioSchema);

module.exports= UsuarioModel;