const {Router} = require('express')
const User = require('../repositories/UserRepository')
const jwt =  require('jsonwebtoken')

const userRouter = Router()

// middleware que faz a segurança dessas rotas
userRouter.use((req, res, next) => {
	console.log("passou por aqui");
	const token =
		req.body.token || req.query.token || req.headers["x-access-token"];
	if (token) {
		jwt.verify(token, '123456', (err, decoded) => {
			if (err) {
				return res.status(404).json({
					success: false,
					message: "Falha ao tentar autenticar o token"
				});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.status(403).send({
			success: false,
			message: "Não há token."
		});
	}
});

userRouter.get("/", (req,res,next) => {
    res.json({message: "Hello World"})
});

userRouter.get('/me/:username', async (req,res,next) => {
    const {username} = req.params;
    const user = await User.findOne({username})

    if(!(user)){
        res.status(400).json({err: "Usuário Inexistente"})
    }

    return res.json({user})
})



module.exports = userRouter