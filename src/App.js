// const http = require('node:http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => { //intrui que as requisições serão feitas por Jsons. 
//     //o req é oq passa na requisição (requests) e o res (response) é oq a requisição HTTP responde
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!', //vamos retornar um Json escrito hello World!
//   }));
// });

// server.listen(8000, ()=>console.log("servidor rodando")); //sempre que o servidor for inicializado, vai retornar esse texto
// //a porta onde o servidor está rodando é a 8000... basta escrever Localhost:8000

const express= require ("express"); //importa biblioteca express
const app=express();
const rotas=require ("./routes");
                        // da start na biblioteca express
// app.get("", (req, res)=>{ //o get é a requisição que lê os dados enviados do backend / unica função que o navegador executa
//     return res.json({     //o post é a requisição que cria uma informação e envia para o back
//                           //o put atualiza uma informação do back
//                           //o delete deleta
//         message: "Hello World!"//linhas que definem rotas e as funções que cada rota faz
//     })
// })

// app.get("/cadastro", (req, res)=> {
//     return res.json({
//         message: "Função cadastro"
//     })
// })
// app.get("/home", (req, res)=> {
//     return res.json({
//         message: "Função cadastro"
//     })
// })
app.use(express.json());
app.use(rotas);

module.exports = app;


// vYlhGCi4cwFKe196
// mongodb+srv://marcosena:<password>@aprendendo.o6aohhm.mongodb.net/?retryWrites=true&w=majority