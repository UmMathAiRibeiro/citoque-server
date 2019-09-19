module.exports = function (app) {
    const login = function (req, res, next) {
        const conection = app.infra.conectionFactory()
        const loginDAO = new app.infra.loginDAO(conection)
        const data = req.body
        loginDAO.login(data, function (err, resul) {
            if (err) {
                res.status(500)
                console.log(err);
            } else {
                count = resul;
                loginDAO.pegaLogin(data, function (err, result) {
                    if (err) {
                        res.status(500)
                    } else {
                        console.log(result);
                        res.json({
                            count: count,
                            result: result,
                            status: 200
                        })
                    }
                })
            }
        })
    }
    app.post('/login', login)
}