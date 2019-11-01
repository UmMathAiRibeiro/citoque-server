function candidaturaDAO(conection) {
    this._conection = conection;
}
candidaturaDAO.prototype.candidaturaTCC = function (data, callback) {
    this._conection.query('INSERT INTO candidatura ' +
        'VALUES(DEFAULT,?,?,?,?,?,?,?,NULL,NULL,?,?,?,?,?,"TCC Startup",DEFAULT,NULL,NULL,NULL,NULL,NULL);',
        [data.iduser, data.curso, data.periodo, data.modulo, data.turma, data.modalidade, data.nomeResponsavel,
            data.descricao, data.resumo, data.equipe, data.nomeProjeto, data.tipo
        ], callback);
};
candidaturaDAO.prototype.candidaturaINTERNO = function (data, callback) {
    this._conection.query('INSERT INTO candidatura ' +
        'VALUES(DEFAULT,?,?,NULL,NULL,NULL,NULL,?,NULL,NULL,?,?,?,?,?,"Projeto Interno",DEFAULT,NULL,NULL,NULL,NULL,NULL);',
        [data.iduser, data.curso, data.nomeResponsavel, data.descricao,
            data.resumo, data.equipe, data.nomeProjeto, data.tipo
        ], callback);
};

candidaturaDAO.prototype.candidaturaEXTERNO = function (data, callback) {
    this._conection.query('INSERT INTO candidatura ' +
        'VALUES(DEFAULT,?,NULL,NULL,NULL,NULL,NULL,?,?,?,?,?,?,?,?,"Projeto Externo",DEFAULT,?,?,?,NULL,NULL);',
        [data.iduser, data.nomeResponsavel, data.telefoneResponsavel, data.emailResponsavel,
            data.descricao, data.resumo, data.equipe, data.nomeProjeto, data.tipo,
            data.solicitante, data.filiacao, data.orcamentoProjeto
        ], callback);
};
module.exports = function () {
    return candidaturaDAO;
};