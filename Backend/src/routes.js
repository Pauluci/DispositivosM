const express = require('express');
const UserController = require('../controller/User')
const ClinicaController = require('../controller/Clinica')
const routes = express.Router()

//GET ==> Usado somenta para buscar informação (no max mandar alguma query) -- SELECT
//POST ==> Usado para enviar dados de formularios -- ele envia(caracter, blob) -- CREATE
//PUT ==> Usado para atualização -- recebe parametros tanto query, post --UPDATE
//DELETE ==> Usado para exclusão dos parametros via query -- DELETE

routes.get('/', (req, res) =>{
    return res.json({mensagem: 'pagina principal'})
});

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);
routes.put('/user', UserController.update);
routes.delete('/user', UserController.delete);

routes.get('/clinica', ClinicaController.index);
routes.post('/clinica', ClinicaController.store);
routes.put('/clinica', ClinicaController.update);
routes.delete('/clinica', ClinicaController.delete);

module.exports= routes;