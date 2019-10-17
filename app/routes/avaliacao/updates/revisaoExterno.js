module.exports = function (app) {
    var revisaoExterno = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var avaliacaoDAO = new app.infra.avaliacaoDAO(conection);
        var data = req.body;
        avaliacaoDAO.revisaoExterno(data, function (err, result) {
            if (err) {
                res.json({
                    result: err,
                    status: 500
                });
                console.log(err);
                conection.end();
            } else {
                res.json({
                    result: result,
                    status: 200
                });
                conection.end();
            }
        });
    };
    app.put('/revisaoExterno', revisaoExterno);
};