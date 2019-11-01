function projetoDAO(conection) {
    this._conection = conection;
}
projetoDAO.prototype.inserirDocumentacao = function (data, callback) {
    this._conection.query('INSERT INTO documentacao VALUES(DEFAULT,?,?,?)',
        [data.idcandidatura, data.etapa, data.caminho], callback);
};
module.exports = function () {
    return projetoDAO;
};