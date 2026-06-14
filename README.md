# nodejsCrud

Projeto simples de CRUD de usuários em Node.js com Express, EJS e MongoDB (Mongoose).

## Visão geral
Aplicação de exemplo para cadastrar, listar, atualizar e remover usuários. Possui endpoints REST e uma rota que renderiza uma lista de usuários com EJS.

## Funcionalidades
- CRUD completo de usuários via API REST
- Página renderizada com lista de usuários (/views/users)
- Conexão com MongoDB Atlas usando Mongoose

## Pré-requisitos
- Node.js 18+ (recomendado)
- pnpm ou npm
- Conta e cluster no MongoDB Atlas (ou outro MongoDB acessível)

## Instalação
1. Clonar o repositório
   git clone <repo-url>
2. Instalar dependências
   pnpm install
   ou
   npm install

## Variáveis de ambiente
Crie um arquivo `.env` na raiz com as seguintes variáveis (NÃO comitar o .env):

MONGODB_USERNAME=seu_usuario_mongodb
MONGODB_PASSWORD=sua_senha_mongodb

O projeto já ignora `.env` via `.gitignore`.

> Observação: não inclua credenciais sensíveis em commits públicos.

## Executando
Modo desenvolvimento (recarregamento automático):

pnpm run start:dev
ou
npm run start:dev

ou para rodar diretamente:

node index.js

A aplicação escuta na porta 8080 (conforme `modules/express.js`).

## Endpoints
Base: http://localhost:8080

- GET /users
  - Lista todos os usuários (JSON)

- GET /users/:id
  - Retorna o usuário com o _id informado

- POST /users
  - Cria um usuário
  - Exemplo de payload JSON:
    {
      "firstName": "João",
      "lastName": "Silva",
      "email": "joao@example.com",
      "password": "senha123"
    }

- PATCH /users/:id
  - Atualiza campos do usuário (parcial)

- DELETE /users/:id
  - Remove o usuário

- GET /views/users
  - Página HTML renderizada com a lista de usuários (EJS)

## Exemplos com curl
Criar usuário:

curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Maria","lastName":"Pereira","email":"maria@example.com","password":"senha123"}'

Listar usuários (JSON):

curl http://localhost:8080/users

Acessar página renderizada (navegador):

http://localhost:8080/views/users

## Observações e pontos de atenção
- O esquema de usuário exige `firstName`, `lastName`, `email` e `password`.
- Validações adicionais (hash de senha, validação de email, autenticação) não estão implementadas — recomendado acrescentar bcrypt e validações antes de usar em produção.
- A configuração de conexão usa `MONGODB_USERNAME` e `MONGODB_PASSWORD` para montar a string do Atlas.

## Estrutura do projeto (resumo)
- index.js                    - Ponto de entrada
- modules/express.js         - Configuração do Express e rotas
- src/models/user.model.js   - Schema Mongoose
- src/database/connect.js    - Conexão com MongoDB
- src/views/                  - Views EJS (index + partials)
