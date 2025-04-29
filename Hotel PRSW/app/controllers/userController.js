const userModel = require('../models/userModell');

const {body, validationResult} = require("express-validator");

const userController = {

    validationRules : [

        body("nome").isLength({min:3, max:70}).withMessage('Insira um nome válido!'),

        body("email").isEmail().withMessage('Insira um email válido!'),

        body("senha").isStrongPassword().withMessage("Insira uma senha válida!"),

        body("csenha").custom((value, { req }) => {

            return value === req.body.senha;

          }).withMessage("As senhas não coincidem"),

        
    ],

    createUser: async (req,res) => {

        const errors = validationResult(req);

        if(!errors.isEmpty()) {

            console.log(errors);

            return res.render('pages/cadastro',{

                campos: req.body,
                listaErros: errors
            })

        }

        var dadosForm = {

            nome_usuario : req.body.nome,
            user_usuario : req.body.nome,
            email_usuario : req.body.email,
            senha_usuario : req.body.senha,

        }

        try {

            results = await userModel.create(dadosForm)
            res.render("pages/index")

        
        } catch (e) {

            console.log(e)
            res.json({erro: "falha ao acessar dados"})

        }
    },
    listUsers: async (req, res) => {

        try {

          results = await userModel.findAll();
          res.render("pages/adm-cliente", { users: results });

        } catch (e) {

          console.log(e); // exibir os erros no console do vs code
          res.json({ erro: "Falha ao acessar dados" });

        }

      },

}


module.exports = userController;