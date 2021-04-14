const { Post, sequelize } = require('../models/');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll();

        return res.json(posts);
    },

    create: async (req, res) => {
        let { texto, img, usuarios_id, n_likes } = req.body;

        let postNovo = await Post.create({ texto, img, usuarios_id, n_likes });

        request = res.json(postNovo);
    },

    update: async (req, res) => {
        let { id } = req.params;
        let { texto, img, usuarios_id, n_likes } = req.body;

        let postAtualizado  = await Post.update({ 
            texto, 
            img, 
            usuarios_id, 
            n_likes 
        }, {
            where: { id }
        });

        return res.json(postAtualizado);
    },

    delete: async (req, res) => {
        let { id } = req.params;

        let postDeletado = await Post.destroy({
            where: { id }
        });

        return res.json(postDeletado);
    }, 

    show: async (req, res) => {
        let { usuarios_id } = req.params;

        let exibirPosts = await Post.findAll({
            where: {
                usuarios_id
            }
        });

        return res.send(exibirPosts)
    }
}

module.exports = postsController;