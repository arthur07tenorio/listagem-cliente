var pool = require("../../config/conections_pool");

const userModel = {

    create: async (dadosForm) => {

        try{

            const [resultados] = await pool.query('INSERT INTO usuario SET ?', [dadosForm]);
            return resultados;

        } catch (error) {

            console.log(error);
            return null;

        }

    },

    findAll: async () => {

        try {

            const [linhas] = await pool.query('SELECT * FROM usuario WHERE tipo_usuario = 1')
            return linhas;

        } catch (error) {

            return error;

        }

    },

}


module.exports = userModel;