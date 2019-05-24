const { Router } = require('express');
const jwt = require('jsonwebtoken')
const User = require('../repositories/UserRepository')

const authRouter = Router();


authRouter.post("/", (req, res, next) => {
	const { email, password,username } = req.body;
	User.findOne({ username }, (err, user) => {
		if (err) throw err;

		if (!user) {
			res
				.status(404)
				.json({
					success: false,
					message: "Falha na autenticação: Usuário Inexistente"
				});
		} else if (user) {
			if (user.password != password) {
				res
					.status(404)
					.json({
						success: false,
						message: "Falha na autenticação: Usuário Inexistente"
					});
			} else {
				let token = jwt.sign({user},'123456', {
					expiresIn: 1440
				});

				res.json({
					success: true,
					message: "Token Criado Com Sucesso",
					token: token
				});
			}
		}
	});
});

module.exports = authRouter
