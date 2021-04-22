// const { Usuario } = require('../models')
// ​
// module.exports = async (request, response, next) => {
//     let { email } = request.body;
//     let users = await Usuario.findAll({ where: { email } });
//     if (users.length) {
//         response.status(400).json({ erro: "Email já cadastrado" })
//         return;
//     } else {
//         next();
//     }
// ​
// }


const { Usuario } = require('../models');

module.exports = async (request, response, next) => {
    let { email, senha } = request.body;

    let user = await Usuario.findAll({where: { email } });
    console.log(user);
    if (user.length) {
        response.status(400).json({erro: "Email já cadastrado."})
        return;
        
    } else {
        if (senha.length < 6 || senha.length > 12) {         

            response.status(400).json({erro: "Senha invalida."})

        } else {
            next();
        }        
    } 
}
