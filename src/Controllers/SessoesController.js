const SessoesModel=require("../Models/SessoesModel");
const UsuarioModel = require("../Models/UsuarioModel");

class SessoesController {
   async create(req, res){
    try {
       const usuarioEncontrado = await UsuarioModel.findById(
          req.body.id_usuario
       );
         if(!usuarioEncontrado) return res.status(404).json({message: "O usuário não foi encontrado"});

        const sessoes= await SessoesModel.create(req.body); //funções de requisição para o BD tem que ser assíncronas
        res.status(200).json(sessoes);
    } catch (error) {
        res.status(500).json({message: "Deu ruim aqui", error: error.message});
    }
       
    }
    async read(req, res){
        try {
        const sessoes = await SessoesModel.find().populate('id_usuario', '-senha');
        res.status(200).json(sessoes); //esse 200 é o codigo http que indica que a requisição foi um sucesso
        } catch (error) {
            res.status(500).json({message: "Deu ruim aqui", error: error.message});
        }
        
    }
    update(req, res){
        try {
            
        } catch (error) {
            res.status(500).json({message: "Deu ruim aqui", error: error.message});
        }
    }
    async delete(req, res){ 
        try {
        const { id_usuario } = req.params;
        const sessaoEncontrada = await SessoesModel.findOne({
            id_usuario,
        });
           
        if (!sessaoEncontrada) return res.status(404).json({message: "sessão não encontrada"}); //a ideia é ver se o usuario existe, se ele existir, atualiza, se não existir, avisa ao usuário que ele não existe
       await sessaoEncontrada.deleteOne();

        res.status(200).json({"mensagem": "Sessão deletada com sucesso"});
        } catch (error) {
            res.status(500).json({message: "Deu ruim aqui", error: error.message});
        }
        
    }
}
module.exports= new SessoesController(); 