// Carregamento de modulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const models = require('./models');
const app = express();
const admin = require("./routes/");
const path = require("path");


//Configurações
    //Body Parser
    app.use(bodyParser.urlencoded({extended: true}));
    // app.use(bodyParser.json);

    //Handlebars
    app.engine('handlebars', handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');

    //Pasta static
    app.use(express.static(path.join(__dirname, "statics")));

// Rotas
    app.use(admin);

//Outros
const PORT = 8081;
models.sequelize.sync({force:true})
  .then(() => {
    console.log("BlogApp - Database & tables created!")
    app.listen(PORT,()=>{
        console.log("BlogApp - Servidor rodando!");
    })
  })
