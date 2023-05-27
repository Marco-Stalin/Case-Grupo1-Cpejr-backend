const {Router} = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoesController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesValidator = require("./Validators/SessoesValidator");


const rotas= Router();

//USUÁRIOS:

rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios', UsuarioController.read);
rotas.delete('/usuarios/:id', UsuarioValidator.destroy, UsuarioController.delete);
rotas.put('/usuarios/:id', UsuarioValidator.update, UsuarioController.update);

//SESSÕES:

rotas.post('/sessoes',SessoesValidator.create, SessoesController.create);
rotas.get('/sessoes', SessoesController.read);
rotas.delete('/sessoes/:id', SessoesValidator.destroy, SessoesController.delete);
rotas.put('/sessoes/:id', SessoesController.update);

module.exports=rotas;