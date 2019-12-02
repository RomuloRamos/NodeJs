const express = require("express"); //Iporta o modulo express para a varável express
const app = express();//Cria uma instancia (objeto) de express com o nome app
const handlebars = require("express-handlebars");//Import da Template Egine handlebars
const bodyparser = require("body-parser");
const Sequelize = require('sequelize');


//Config
    //Template Engine
    //Aqui estamos configurando o Handlebars como Template Engine dentro do Express
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine','handlebars');
    //Configuração de acesso ao Banco de Dados
    const sequelize = new Sequelize('test','root','ICTSD@tabase',{
        host: "localhost",
        dialect:"mysql"
    });
    //Body-parser
    app.use(bodyparser.urlencoded({extended:false}));
    // app.use(bodyparser.json); Na aula utiliza, mas ao rodar deu problema

//Criacao de rotas
    app.get('/cad', function(req, res){
        res.render('formulario');
    });

    app.post('/add', function(req, res){  //Vale lembrar também que rotas definidas como POST não são acessíveis pela URL
        // res.send("FORMULARIO RECEBIDO")
        res.send("Texto:"+req.body.titulo+" Conteudo: "+req.body.conteudo);
    });

app.listen("8081",
    function()
    {
        console.log("Servidor rodando na URL: http://localhost:8081");
    })