function avaliacaoDAO(conection) {
    this._conection = conection;
}
//SELECTS
avaliacaoDAO.prototype.selectTcc = function (callback) {
    this._conection.query("SELECT * FROM candidatura_tcc WHERE situacao = 'em avaliacao'", callback);
};

avaliacaoDAO.prototype.selectInterno = function (callback) {
    this._conection.query("SELECT * FROM candidatura_interno WHERE situacao = 'em avaliacao'", callback);
};

avaliacaoDAO.prototype.selectExterno = function (callback) {
    this._conection.query("SELECT * FROM candidatura_externo WHERE situacao = 'em avaliacao'", callback);
};

avaliacaoDAO.prototype.selectTccEmDesenvolvimento = function (callback) {
    this._conection.query("SELECT * FROM candidatura_tcc WHERE situacao = 'em desenvolvimento'", callback);
};

avaliacaoDAO.prototype.selectInternoEmDesenvolvimento = function (callback) {
    this._conection.query("SELECT * FROM candidatura_interno WHERE situacao = 'em desenvolvimento'", callback);
};

avaliacaoDAO.prototype.selectExternoEmDesenvolvimento = function (callback) {
    this._conection.query("SELECT * FROM candidatura_externo WHERE situacao = 'em desenvolvimento'", callback);
};
// 
avaliacaoDAO.prototype.selectTccEmRevisao = function (callback) {
    this._conection.query("SELECT * FROM candidatura_tcc WHERE situacao = 'em revisao'", callback);
};

avaliacaoDAO.prototype.selectInternoEmRevisao = function (callback) {
    this._conection.query("SELECT * FROM candidatura_interno WHERE situacao = 'em revisao'", callback);
};

avaliacaoDAO.prototype.selectExternoEmRevisao = function (callback) {
    this._conection.query("SELECT * FROM candidatura_externo WHERE situacao = 'em revisao'", callback);
};
// 
// /SELECTS
// -------------------------------------------------------------------------------------------------------------------------
// DELETES
avaliacaoDAO.prototype.deleteTcc = function (data, callback) {
    this._conection.query('DELETE FROM candidatura_tcc WHERE id_tcc = ?',
        [data.id], callback);
};

avaliacaoDAO.prototype.deleteExterno = function (data, callback) {
    this._conection.query('DELETE FROM candidatura_externo WHERE id_externo = ?',
        [data.id], callback);
};

avaliacaoDAO.prototype.deleteInterno = function (data, callback) {
    this._conection.query('DELETE FROM candidatura_interno WHERE id_interno = ?',
        [data.id], callback);
};
// /DELETES
// --------------------------------------------------------------------------------------------------------------------------
// UPDATES
// APROVADOS
avaliacaoDAO.prototype.aproveTcc = function (data, callback) {
    data.date = data.date.split('T');
    this._conection.query("UPDATE candidatura_tcc SET situacao = 'em desenvolvimento', data_aprovacao = ? WHERE id_tcc = ?",
        [data.date[0], data.id], callback);
};
avaliacaoDAO.prototype.aproveExterno = function (data, callback) {
    data.date = data.date.splice('T');
    this._conection.query("UPDATE candidatura_externo SET situacao = 'em desenvolvimento', data_aprovacao = ? WHERE id_externo = ?",
        [data.date[0], data.id], callback);
};
avaliacaoDAO.prototype.aproveInterno = function (data, callback) {
    data.date = data.date.split('T');
    this._conection.query("UPDATE candidatura_externo SET situacao = 'em desenvolvimento', data_aprovacao = ? WHERE id_interno = ?",
        [data.date[0], data.id], callback);
};
// /APROVADOS
// REVISAO
avaliacaoDAO.prototype.revisaoTcc = function (data, callback) {
    this._conection.query("UPDATE candidatura_tcc SET situacao = 'em revisao', revisao = ? WHERE id_tcc = ?",
        [data.revisao, data.id], callback);
};
avaliacaoDAO.prototype.revisaoExterno = function (data, callback) {
    this._conection.query("UPDATE candidatura_externo SET situacao = 'em revisao', revisao = ? WHERE id_externo = ?",
        [data.revisao, data.id], callback);
};
avaliacaoDAO.prototype.revisaoInterno = function (data, callback) {
    this._conection.query("UPDATE candidatura_interno SET situacao = 'em revisao', revisao = ? WHERE id_interno = ?",
        [data.revisao, data.id], callback);
};
// /REVISAO
// REENVIAR
avaliacaoDAO.prototype.reenviarTcc = function (data, callback) {
    this._conection.query("UPDATE candidatura_tcc SET situacao = 'em avaliacao', revisao = NULL, curso = ?, periodo = ?, modulo = ?," +
        " turma = ?, modalidade = ?, nomeResponsavel = ?, descricao = ?, resumo = ?, equipe = ?, nomeProjeto = ?, tipo = ? WHERE id_tcc = ?",
        [data.curso, data.periodo, data.modulo, data.turma, data.modalidade, data.nomeResponsavel, data.descricao, data.resumo, data.equipe,
            data.nomeProjeto, data.tipo, data.id
        ], callback);
};
avaliacaoDAO.prototype.reenviarExterno = function (data, callback) {
    this._conection.query("UPDATE candidatura_externo SET situacao = 'em avaliacao', solicitante = ?, filiacao = ?, nomeResponsavel = ?," +
        "telefoneResponsavel = ?, emailResponsavel = ?, nomeProjeto = ?, orcamentoProjeto = ?, tipo = ?, resumo = ?, descricao = ?, " +
        "equipe = ?, revisao = NULL WHERE id_externo = ?",
        [data.solicitante, data.filiacao, data.nomeResponsavel, data.telefoneResponsavel, data.emailResponsavel, data.nomeProjeto,
            data.orcamentoProjeto, data.tipo, data.resumo, data.descricao, data.equipe, data.id
        ], callback);
};
avaliacaoDAO.prototype.reenviarInterno = function (data, callback) {
    this._conection.query("UPDATE candidatura_interno SET curso = ?, nomeProjeto = ?, nomeResponsavel = ?, tipo = ?,resumo = ?," +
        "descricao = ?, equipe = ?, situacao = 'em avaliacao', revisao = NULL WHERE id_interno = ?",
        [data.curso, data.nomeProjeto, data.nomeResponsavel, data.tipo, data.resumo, data.descricao, data.equipe, data.id], callback);
};
// /REENVIAR
// /UPDATES
module.exports = function () {
    return avaliacaoDAO;
};