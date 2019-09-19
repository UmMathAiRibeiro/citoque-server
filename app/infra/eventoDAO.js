function eventoDAO(conection) {
    this._conection = conection
}
eventoDAO.prototype.cadastroEvento = function (data, callback) {
    this._conection.query('INSERT INTO evento VALUES(DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [data.iduser, data.id_agenda, data.titulo, data.cor, data.ano_start, data.mes_start, data.dia_start,
            data.hora_start, data.minuto_start, data.segundo_start, data.ano_end, data.mes_end,
            data.dia_end, data.hora_end, data.minuto_end, data.segundo_end, data.descricao
        ], callback)
}
eventoDAO.prototype.selectEventosFiec1 = function (data, callback) {
    this._conection.query('SELECT * FROM evento WHERE id_agenda = 1', callback)
}
eventoDAO.prototype.selectEventosFiec2 = function (data, callback) {
    this._conection.query('SELECT * FROM evento WHERE id_agenda = 2', callback)
}
eventoDAO.prototype.deleteEvento = function (data, callback) {
    this._conection.query('DELETE FROM evento WHERE idevento = ?', [data.id], callback)
}
module.exports = function () {
    return eventoDAO
}