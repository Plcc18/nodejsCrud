const fs = require('fs');
const path = require('path');

// Criar pasta
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('Pasta criada com sucesso!');
    
// });

// Criar arquivo
// fs.writeFile(
//     path.join(__dirname, 'test', 'test.txt'), 'Hello, World!', (err) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('Arquivo criado com sucesso!');
// });

// Adicionar à um arquivo
// fs.appendFile(path.join(__dirname, 'test', 'test.txt'), ' Olá, mundo!', (err) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('Arquivo atualizado com sucesso!');
// });

// Ler arquivo
// fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf8', (err, data) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// });