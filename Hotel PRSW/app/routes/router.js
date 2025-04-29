const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');


router.get("/", (req, res)=>{
    res.render("pages/index");
});

router.get("/login", (req, res)=>{
    res.render("pages/login");
} )

router.get("/cadastro", (req, res)=>{
    res.render("pages/cadastro", { campos:{nome:"",email:"",senha:"",csenha:""}, listaErros: null })
})

router.get("/perfil", (req, res)=>{
    res.render("pages/perfil")
})

router.post('/cadastro', userController.validationRules, function (req,res){
    userController.createUser(req,res)
})

router.get("/adm-cliente", (req, res)=>{
    userController.listUsers(req, res);
});

module.exports = router 