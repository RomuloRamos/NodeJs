const express = require("express") //Iporta o modulo express para a varável express

const app = express();//Cria uma instancia (objeto) de express com o nome app

app.get("/", 
    function(req, res)
    {
        res.sendFile(__dirname+"/HTML_FILES/index.html");
    });

app.get("/sobre", 
    function(req, res)
    {
        res.sendFile(__dirname+"/HTML_FILES/sobre.html");
    });   
    
app.get("/parametro/:nome/:carro/:cor",
    function(req, res)
    {
        if(req.params)
        {
            res.send("<h1>Ola "+req.params.nome+"!</h1><h2>Seu carro é um: "+req.params.carro+"!</h2><h3>Na cor: "+req.params.cor+"!</h3>");
        }
    });

app.listen("8081", 
    function()
    {
        console.log("Servidor rodando na URL: http://localhost:8081");
    })