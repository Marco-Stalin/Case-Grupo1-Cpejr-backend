/* 
AULA 8: VALIDATORS
-> são funções que validam dados que vem das requisições do backend
-> uma requisição de criação de usuário, é necessário mandar vários dados. 
O validator vai validar as informações enviadas (se o email tem o formato de um email) 
e chegar a completude das informações
->vamos usar a biblioteca zod e zod-express-middleware
-> Validação antes da requisição chegar no controller
AULA 10
->validação a nível de banco de dados
->vai ocorrer quando formos salvar algum dado no mongoDB
->até então, usuários com o mesmo nome e email podem se logar paralelamente... isso não é legal
AULA 11 
->só deve existir uma sessão ativa por usuário
->daí vem a validação a nivel de BD dnv
AULA 12
-> criptografas senhas assim q são salvas no BD
-> dá mais segurança no sistema
-> para descriptografar ela no login do usuario vamos fazer no backend
->além de criptografar a senha, é importante que ela não seja enviada como resposta de nenhuma requisição
AULA 13
->dotenv é uma biblioteca de segurança
-> o arquivo .env vai guardar toda e qualquer variável sensível do sistema
-> o arquivo .env não vai subir para o git. Ele vai ser guarddado num local seguro. 
->quando necessário fazer algum desenvolvimento local no repositório a gente pega o .env e coloca na pasta do projeto
->  se esse arquivo for pro git, qualquer um vai poder pegar variáveis que não deveriam ser públicas















*/ 