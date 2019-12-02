const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','ICTSD@tabase',{
    host: "localhost",
    dialect:"mysql"
});

// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso");
// }).catch(function(error){
//     console.log("Falha ao se conectar com o Banco. Error: "+error);
// });

const Postagem = sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
});

const Usuario = sequelize.define("usuarios",{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
});

// Usuario.sync({force:true});// Sempre comentar ou deletar essa linha apos a primeira vez que rodar o programa, se não ele gera a tabala em sync novamente.
// Postagem.sync({force:true});

Postagem.create({
    titulo: "Um titulo qualquer",
    conteudo:"Um conteudo qualquer"
});

Usuario.create({
    nome: "Rômulo",
    sobrenome:"Ramos",
    idade:29,
    email:"romulo.ramos@gee.inatel.br"
});