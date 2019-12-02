const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

// Post.sync({force: true}); Só executar esse comando na criação, do contrário ele apaga e gera novamente a tabela, e vc perde os dados

module.exports = Post;