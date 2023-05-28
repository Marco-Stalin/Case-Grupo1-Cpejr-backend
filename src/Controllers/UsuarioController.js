const UsuarioModel=require("../Models/UsuarioModel");


class UsuarioController {
   async create(req, res){
    try { // se tiver algum problema no bloco de try, ele vai ser jogado no bloco de catch. Útil para evitar que o servidor quebre quando tentarem cadastrar um email/nome existente no sistema
        const usuario= await UsuarioModel.create(req.body); //funções de requisição para o BD tem que ser assíncronaas
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({message: "Deu ruim aqui", error: error.message});
    }

    }
    async read(req, res){
    try {
        const usuarios = await UsuarioModel.find();
        res.status(200).json(usuarios); //esse 200 é o codigo http que indica que a requisição foi um sucesso
    } catch (error) {
        res.status(500).json({message: "Deu ruim aqui", error: error.message});    
    }
    }
    async update(req, res){
        try {
        const { id } = req.params;
        const usuariosEncontrado = await UsuarioModel.findById(id);
        if (!usuariosEncontrado) return res.status(404).json({message: "usuário não encontrado"}); //a ideia é ver se o usuario existe, se ele existir, atualiza, se não existir, avisa ao usuário que ele não existe
        const usuario= await usuariosEncontrado.set(req.body).save() //se o usuario existir, vamosa fazer a atualização dos dados do usuário
        //esse save vai pegar as alterações do usuário e salvar no banco de dados
        // const usuario = await UsuarioModel.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(usuario);
        } catch (error) {
        res.status(500).json({message: "Deu ruim aqui", error: error.message});
        }
        
    }
    async delete(req, res){
        try {
            const { id } = req.params;
            const usuariosEncontrado = await UsuarioModel.findById(id);
           
            if (!usuariosEncontrado) return res.status(404).json({message: "usuário não encontrado"}); //a ideia é ver se o usuario existe, se ele existir, atualiza, se não existir, avisa ao usuário que ele não existe
           await usuariosEncontrado.deleteOne();
  
            res.status(200).json({"mensagem": "Usuário deletado com sucesso"});
        } catch (error) {
            res.status(500).json({message: "Deu ruim aqui", error: error.message});  
        }
       
    }
    
}
module.exports= new UsuarioController(); 