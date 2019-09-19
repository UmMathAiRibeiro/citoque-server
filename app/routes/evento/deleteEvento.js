module.exports = function (app) {
    const deleteEvento = function (req, res, nexr) {
        const conection = app.infra.conectionFactory()
        const eventoDAO = new app.infra.eventoDAO(conection)
        const data = req.params
        eventoDAO.deleteEvento(data, function (err, result) {
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
    app.delete('/deleteEvento/:id', deleteEvento)
}