module.exports = function (app) {
    const cadastroEvento = function (req, res, next) {
        const conection = app.infra.conectionFactory()
        const eventoDAO = new app.infra.eventoDAO(conection)
        const data = req.body
        eventoDAO.cadastroEvento(data, function (err, result) {
            if (err) {
                res.status(500);
                console.log(err);
            } else {
                console.log("CADASTROU, usuario: " + data.iduser);
                res.json({
                    result: result,
                    status: 200
                })
            }
        })
    }
    app.post('/cadastroEvento', cadastroEvento)
}