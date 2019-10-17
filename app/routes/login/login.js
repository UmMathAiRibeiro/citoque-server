module.exports = function (app) {
    var login = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var loginDAO = new app.infra.loginDAO(conection);
        var data = req.body;
        loginDAO.login(data, function (err, resul) {
            if (err) {
                res.json({
                    result: err,
                    status: 500
                });
                console.log(err);
                conection.end();
            } else {
                count = resul;
                loginDAO.pegaLogin(data, function (err, result) {
                    if (err) {
                        res.json({
                            result: err,
                            status: 500
                        });
                        conection.end();
                    } else {
                        res.json({
                            count: count,
                            result: result,
                            status: 200
                        });
                        conection.end();
                    }
                });
            }
        });
    };
    app.post('/login', login);
};