const { Usuario, sequelize } = require('../models/');

const usuariosController = {
    index: async (request, response) => {
        const usuarios =  await Usuario.findAll();
        
        return response.render('usuarios', { listaUsuarios: usuarios });
    },  
    registro: (request, response) => {
        return response.render('registro');
    },
    login: (request,response) => {        
        return response.render('login');
    },
    create: async (req, res) => {
        let { nome, email, senha } = req.body;

        let usuarioNovo = await Usuario.create({nome, email, senha});
        
        return res.redirect('/usuarios/login');
    },
    update: async (req, res) => {
        let { id } = req.params;
        let { nome, email, senha} = req.body;

        let usuarioAtualizado = await Usuario.update({
            nome,
            email,
            senha
        }, { 
            where: { id }
        })

        return res.send(usuarioAtualizado);
    },
    delete: async (request, response) => {
        let { id } = request.params;

        let usuarioDeletado = await Usuario.destroy({
            where: { id }
        });

        return response.json(usuarioDeletado);
    }
}

module.exports = usuariosController;



    // create: (req,res) => {
    //     return res.send(Usuario.create());
    // },

    // update: (req, res) => {
    //     return res.send(Usuario.findById());
    // },

    // delete: (req, res) => {
    //     return res.send(Usuario.findById());
    // }
