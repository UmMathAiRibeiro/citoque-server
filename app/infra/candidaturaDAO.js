function candidaturaDAO(conection) {
    this._conection = conection;
}
candidaturaDAO.prototype.candidaturaTCC = function (data, callback) {
    this._conection.query('INSERT INTO candidatura_tcc VALUES(DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,DEFAULT,DEFAULT,DEFAULT)',
        [data.iduser, data.curso, data.periodo, data.modulo, data.turma, data.modalidade, data.nomeResponsavel,
            data.descricao, data.resumo, data.equipe, data.nomeProjeto, data.tipo
        ], callback);
};
candidaturaDAO.prototype.candidaturaINTERNO = function (data, callback) {
    this._conection.query('INSERT INTO candidatura_interno VALUES(DEFAULT,?,?,?,?,?,?,?,?,DEFAULT,DEFAULT,DEFAULT)',
        [data.iduser, data.curso, data.nomeProjeto, data.nomeResponsavel, data.tipo,
            data.resumo, data.descricao, data.equipe
        ], callback);
};

candidaturaDAO.prototype.candidaturaEXTERNO = function (data, callback) {
    this._conection.query('INSERT INTO candidatura_externo VALUES(DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,DEFAULT,DEFAULT,DEFAULT)',
        [data.iduser, data.solicitante, data.filiacao, data.nomeResponsavel, data.telefoneResponsavel,
            data.emailResponsavel, data.nomeProjeto, data.orcamentoProjeto, data.tipo, data.resumo, data.descricao,
            data.equipe
        ], callback);
};
module.exports = function () {
    return candidaturaDAO;
};