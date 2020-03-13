// Carregamento de modulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const models = require('./models');
const app = express();
const admin = require("./routes/");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");


// //Configurações
//     // Sessão
//     app.use(session({
//       secret: "cursodenode",
//       resave: true,
//       saveUninitialized: true,
//     }));
//     app.use(flash());
//     //Midware
//     app.use((req, res, next)=>{
//       //Variaveis Globais
//       res.locals.success_msg = req.flash("Success_msg");
//       res.locals.error_msg = req.flash("Erro_msg");
//       next();
//     });

//     //Body Parser
//     app.use(bodyParser.urlencoded({extended: true}));
//     // app.use(bodyParser.json);

//     //Handlebars
//     app.engine('handlebars', handlebars({defaultLayout:'main'}));
//     app.set('view engine', 'handlebars');

//     //Pasta static
//     app.use(express.static(path.join(__dirname, "statics")));

//     app.use((req, res,next)=>{
//       console.log("Isso é um midware");
//       next();
//     })
// Rotas
    app.use(admin);

//Outros
const PORT = 8081;
models.sequelize.sync({})
  .then(() => {
    console.log("BlogApp - Database & tables created!")
    app.listen(PORT,()=>{
        console.log("BlogApp - Servidor rodando!");
    })
  })
