const express = require('express');
const routes = express.Router()

//GET ==> Usado somenta para buscar informação (no max mandar alguma query) -- SELECT
//POST ==> Usado para enviar dados de formularios -- ele envia(caracter, blob) -- CREATE
//PUT ==> Usado para atualização -- recebe parametros tanto query, post --UPDATE
//DELETE ==> Usado para exclusão dos parametros via query -- DELETE

routes.get('/', (req, res) =>{
    return res.json({mensagem: 'pagina principal'})
});

routes.get('/produtos', (req, res) =>{
    return res.json({mensagem: 'Rota de todos os produtos'})
});

routes.post('/produtos', (req, res) =>{
    var produto = req.body.produto;
    return res.json({mensagem: 'Add produto ' + produto.nome})
});

routes.put('/produtos', (req, res) =>{
    var id = req.query.id;
    var produto = req.body.produto;
    return res.json({mensagem: 'Atualizar o produto ' + id +' com os dados do post ' + produto.nome})
});

routes.delete('/produtos', (req, res) =>{
    var id = req.query.id;
    return res.json({mensagem: 'Deleta o produto ' + id})
});

module.exports= routes;