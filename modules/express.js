const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views')

app.use((req, res, next) => {
    console.log(`Request type: ${req.method}`);;
    console.log(`Content type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date()}`);

    next();
});

//Renderizar página index
app.get('/views/users', async (req, res) => {

    try {
        const users = await UserModel.find({});
        res.render('index', { users })
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Buscar todos os usuários
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});

        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Buscar usuário por id
app.get('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Criar usuário
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Atualizar usuário
app.patch('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Deletar usuário
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));