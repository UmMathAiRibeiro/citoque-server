module.exports = function (app) {
    const selectEventosFiec2 = function (req, res, next) {
        const conection = app.infra.conectionFactory()
        const eventoDAO = new app.infra.eventoDAO(conection)
        const data = req.body
        eventoDAO.selectEventosFiec2(data, function (err, result) {
            if (err) {
                res.status(500);
                console.log(err);
            } else {
                res.json({
                    result: result,
                    status: 200
                })
            }
        })
    }
    app.get('/selectEventosFiec2', selectEventosFiec2)
}