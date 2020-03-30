const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileControler = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();
/**
 * Métodos HTTP
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uam informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
/**
 * Tipos de parâmetros:
 * Query Params: Parâmentros enviados/nomeados na rota após "?" (usados em filtros e paginação);
 * Route Params: Parâmetros utilizados para identificar recursos;
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos;
 */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server.
 * NoSQL: MongoDB, CouchDB...
 */
routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileControler.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;