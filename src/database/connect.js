const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        const username = encodeURIComponent(process.env.MONGODB_USERNAME);
        const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
        await mongoose.connect(
            `mongodb+srv://${username}:${password}@cursonodejs.gohvoe1.mongodb.net/?appName=CursoNodeJs`
        ); 
        console.log("Conexão estabelecida com sucesso")
    } catch (error) {
        console.log("Ocorreu um erro ao se conectar com o banco de dados: ", error)
    }
};

module.exports = connectToDatabase;