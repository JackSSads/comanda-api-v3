const router = require("express").Router();
const logger = require("../../../logger");
const AuthService = require("../../services/authService");

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const { token, user } = await AuthService.login(email, password);

        return res.status(200).send({ message: "Login realizado com sucesso.", func: user.func, token: token, status: true });
    } catch (error) {
        logger.error("Error on login:", error);
        return res.status(500).send({ message: "Erro ao realizar login.", status: false });
    };
});

module.exports = router;