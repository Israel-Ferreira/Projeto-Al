const { Router } = require("express");
const User = require("../repositories/UserRepository");

const createUserRouter = Router();

createUserRouter.post("/", (req, res, next) => {
	const user = req.body;

	if (user.username == "" || user.email == "" || user.password == "") {
		res.status(404).json({ success: false, message: "FALHA: Campos vazios" });
	}

	const newUser = new User(user);

	newUser.save(err => {
		if (err) throw err;
		res.json({ success: true, message: "Usuário Criado com sucesso" });
	});
});

module.exports = createUserRouter;
