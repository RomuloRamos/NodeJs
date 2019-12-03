const express = require("express"); //Iporta o modulo express para a varável express
const app = express();//Cria uma instancia (objeto) de express com o nome app
const handlebars = require("express-handlebars");//Import da Template Egine handlebars
const bodyparser = require("body-parser");
const Post = require('./models/Post');

//Config
    //Template Engine
    //Aqui estamos configurando o Handlebars como Template Engine dentro do Express
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine','handlebars');

    //Body-parser
    app.use(bodyparser.urlencoded({extended:false}));
    // app.use(bodyparser.json); Na aula utiliza, mas ao rodar deu problema

//Criacao de rotas
    app.get('/cad', function(req, res){
        res.render('formulario');
    });

    app.get('/', function(req,res){
        Post.findAll().then(function(allPosts){
            console.log(allPosts);
            res.render('home', {posts:allPosts});
        });
    });

    app.post('/add', function(req, res){  //Vale lembrar também que rotas definidas como POST não são acessíveis pela URL
        // res.send("FORMULARIO RECEBIDO")
        // res.send("Texto:"+req.body.titulo+" Conteudo: "+req.body.conteudo);
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            // res.send('POST CRIADO COM SUCESSO!');
            res.redirect('/');//Em caso de sucesso, redireciona para a pagina "home"
        }).catch(function(error){
            res.send('FALHA NO POST: '+error);
        })
    });

app.listen("8081",
    function()
    {
        console.log("Servidor rodando na URL: http://localhost:8081");
    })