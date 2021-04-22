//1 - instalar o node
//2 - instalar o yarn
//3 - criar a pasta de projetos
//4 - criar a pasta do Backend
//5 - dentro da pasta Backend usar yarn init
//6 - criar o arquivo index.js
//7 - instalar o express | yarn add express
//8 - instalar o insomnia para testes
//9 - copiar codigo abaixo para testar
//10 - executar o codigo abaixo para fazer o get e o post no insomnia

const express = require('express');

const app = express();
app.listen(3000)
app.use(express.json())

//GET ==> Usado somenta para buscar informação (no max mandar alguma query) -- SELECT
//POST ==> Usado para enviar dados de formularios -- ele envia(caracter, blob) -- CREATE
//PUT ==> Usado para atualização -- recebe parametros tanto query, post --UPDATE
//DELETE ==> Usado para exclusão dos parametros via query -- DELETE

app.get('/', (req, res) =>{
    var id = req.query.id;
    return res.json({mensagem: 'hello world ' + id})
});

app.post('/', (req, res) =>{
    var nome = req.body.nome;
    return res.json({mensagem: 'hello world ' + nome})
});