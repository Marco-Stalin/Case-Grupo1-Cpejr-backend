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
AULA 14
->no front o usuário coloca email e senha, envia uma requisição de login com esse email e senha
->o servidor vai processar esse email e senha e se tudo estiver correto ele vai mandar um tokenJWT
-> esse token JWT nada mais é do que todas as informações do usuário compiladas e criptografadas em uma string
->esse token vai ser armazenado no front e sempre que o usuário precisar realizar uma requisição que requer autenticação, ele vai mandar, junto com os dados da requisição, o token JWT
-> o server vai processar a requisição e vai tambem procurar se o token JWT daquela requisição que precisa de autenticação existe, e se é válido
AULA 15
->O fornt vai pagar o token e armazenar
-> para toda requisição que necessitar de autenticação, ele envia os dados de requisição + token
-> o server vai pegar a requisição e antes de processar ela, vai olhar se o token que ta junto dela é valido
-> para fazer essa validação, vamos usar um middeware
->um middleware é uma funçaõ que vai processar a requisição antes do controller... parece o validator
->












*/ 