const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const models = require("./models");

//Config
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//body-parser
app.use(bodyparser.urlencoded({extended:false}));

app.get(
    '/',
    async(req, res) => {
        models.dbItemReg.findAll().then(function(allItens) {
            res.render('home',{itens: allItens});
        }).catch(err => {
            console.log("Error to render: " +err);
        })
    }
);

app.get(
    '/cad_contrato',
    async(req, res) => {
        res.render('cadContract')
    }
);

app.get(
    '/cad_fonecedor',
    async(req, res) => {
        res.render('cadForn')
    }
);

app.get(
    '/cad_item',
    async(req, res) => {
        res.render('cadItem')
    }
);


app.get(
    '/cad_type',
    async(req, res) => {
        res.render('cadItemType')
    }
);

app.get(
    '/cad_modal',
    async(req, res) => {
        res.render('cadModal')
    }
);

app.post(
    '/contract', async(req, res) =>{
        models.dbContracts.create({
            nrContract: req.body.Nr_Contract,
            currency: req.body.Currency,
            fk_Modal_Id: req.body.fk_Modal_ID,
            fk_CompanyRegister_Id: req.body.fk_CompanyRegister_ID,
        }).then(function(){
            // res.send('POST CRIADO COM SUCESSO!');
            res.redirect('/');//Em caso de sucesso, redireciona para a pagina "home"
        }).catch(function(error){
            res.send('FALHA NO POST: '+error)
        });
    }
);
app.post(
    '/company', async(req, res) =>{
        models.dbCompanies.create({
            companyName: req.body.CompanyName,
            country: req.body.Country,
            contactName: req.body.ContactName,
        }).then(function(){
            // res.send('POST CRIADO COM SUCESSO!');
            res.redirect('/');//Em caso de sucesso, redireciona para a pagina "home"
        }).catch(function(error){
            res.send('FALHA NO POST: '+error)
        });
    }
);
app.post(
    '/item', async(req, res) =>{
        models.dbItemReg.create({
            partNumber: req.body.partNumber,
            purchasePercent: req.body.PurchasePercent,
            fk_ContractNumb: req.body.fk_ContractNumb,
            unitPrice: req.body.unitPrice,
            division: req.body.Division,
            firstDescription: req.body.Description_Pt,
            secoundDescription: req.body.Description_Eng,
            marker: req.body.Marker,
            markerCode: req.body.MarkerCode,
            unitType: req.body.UnitType,
            localUnitType: req.body.LocalUnitType,
            minQtt: req.body.MinQtt,
            phaseIn: req.body.PhaseIn,
            phaseOut: req.body.PhaseOut,
            fk_CmdtyType_id: req.body.fk_CmdtyType_id,
        }).then(function(){
            // res.send('POST CRIADO COM SUCESSO!');
            res.redirect('/');//Em caso de sucesso, redireciona para a pagina "home"
        }).catch(function(error){
            res.send('FALHA NO POST: '+error)
        });
    }
);
app.post(
    '/itemType', async(req, res) =>{
        models.dbComodityTypes.create({
            typeName: req.body.typeName,
        }).then(function(){
            // res.send('POST CRIADO COM SUCESSO!');
            res.redirect('/');//Em caso de sucesso, redireciona para a pagina "home"
        }).catch(function(error){
            res.send('FALHA NO POST: '+error)
        });
    }
);
app.post(
    '/modal', async(req, res) =>{
        models.dbModal.create({
            sendBy: req.body.sendBy,
        }).then(function(){
            // res.send('POST CRIADO COM SUCESSO!');
            res.redirect('/');//Em caso de sucesso, redireciona para a pagina "home"
        }).catch(function(error){
            res.send('FALHA NO POST: '+error)
        });
    }
);

//models.sequelize
    // .sync()
  //  .then(
      app.listen("8081",
        function()
        {
            console.log("Servidor rodando na URL: http://localhost:8081");
    //     }))
    // .catch(err => {
    //     console.log("Erro ao rodar o Servidor:" + err);
    });