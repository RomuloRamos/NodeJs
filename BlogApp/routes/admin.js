const express = require("express");
const router = express.Router();
const model = require('../models')

router.get('/',(req, res) =>{
    res.render("admin/index");//Aponta para o arquivo index da pasta admin no diretório views (diretório padrão do handlebars)
});

router.get('/posts',(req, res) =>{

    res.send("Pagina de Posts")

});

router.get('/categorias',(req, res) =>{

    res.render('admin/categorias')

});

router.get('/categorias/add',(req, res) =>{

    res.render('admin/addcategorias')

});

router.post('/categorias/new', async(req, res) =>{
    const newCategory = {
        name: req.body.name,
        slug: req.body.slug
    }
    model.dbCategorias.create(newCategory).then(()=>{
        console.log("Admin - Nova categoria salva!");
    }).catch(()=>{
        console.log("Admin - Erro ao salvar categoria!");
    })
});

module.exports = router;