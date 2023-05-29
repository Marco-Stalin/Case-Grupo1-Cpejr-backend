const jwt = require("jsonwebtoken")


function verificarJwt(req, res, next){
const authHeader = req.headers.authorization || req.headers.Authorization;
if (!authHeader) return res.status(403).json({messge: "Header de autorização não encontrado"});

const[bearer, token] = authHeader.split(" ") //pegaro authHeader e separar em duas metades (pelo espaço da string)

if(!/^Bearer$/.test(bearer)) return res.status(403).json({messge: "Header de autorização mal formatado"});

if(!token) return res.status(403).json({messge: "JWT token não encontrado"});

jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
     if(err) return res.status(403).json({messge: "JWT é inválido"});

    req.usuarioId= usuario._id;
    next(); // serve para mandar para a próxima função que vai processar a requisição
});



 
}

module.exports = verificarJwt;