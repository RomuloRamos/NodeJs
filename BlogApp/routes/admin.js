const express = require("express");
const router = express.Router();


router.get('/',(req, res) =>{
    res.render("admin/index");//Aponta para o arquivo index da pasta admin no diretório views (diretório padrão do handlebars)
});

router.get('/posts',(req, res) =>{

    res.send("Pagina de Posts")

});

router.get('/categorias',(req, res) =>{

    res.send("Pagina de categorias")

});


module.exports = router;