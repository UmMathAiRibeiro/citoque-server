function avaliacaoDAO(conection) {
    this._conection = conection;
}
//SELECTS
avaliacaoDAO.prototype.selectCandidaturas = function (callback) {
    this._conection.query("SELECT * FROM candidatura WHERE situacao = 'em avaliacao'", callback);
};

avaliacaoDAO.prototype.selectCandidaturasEmDesenvolvimento = function (callback) {
    this._conection.query("SELECT * FROM candidatura WHERE situacao = 'em desenvolvimento'", callback);
};
avaliacaoDAO.prototype.selectCandidaturasEmRevisao = function (callback) {
    this._conection.query("SELECT * FROM candidatura WHERE situacao = 'em revisao'", callback);
};
avaliacaoDAO.prototype.selectCandidaturasReprovados = function (callback) {
    this._conection.query("SELECT * FROM candidatura WHERE situacao = 'reprovado'", callback);
};
// /SELECTS
// -------------------------------------------------------------------------------------------------------------------------
// DELETES
avaliacaoDAO.prototype.deleteCandidatura = function (data, callback) {
    this._conection.query('DELETE FROM candidatura WHERE id = ?',
        [data.id], callback);
};
// /DELETES
// --------------------------------------------------------------------------------------------------------------------------
// UPDATES
// APROVADOS
avaliacaoDAO.prototype.aproveCandidatura = function (data, callback) {
    data.date = data.date.split('T');
    this._conection.query("UPDATE candidatura SET situacao = 'em desenvolvimento', dataAprovacao = ? WHERE id = ?",
        [data.date[0], data.id], callback);
};
// /APROVADOS
// REPROVADOS
avaliacaoDAO.prototype.reprovacaoCandidatura = function (data, callback) {
    this._conection.query("UPDATE candidatura SET situacao = 'reprovado', revisaoReprovacao = ? WHERE id = ?",
        [data.revisao, data.id], callback);
};
// /REPROVADOS
// REVISAO
avaliacaoDAO.prototype.revisaoCandidatura = function (data, callback) {
    this._conection.query("UPDATE candidatura SET situacao = 'em revisao', revisaoReprovacao = ? WHERE id = ?",
        [data.revisao, data.id], callback);
};
// /REVISAO
// REENVIAR
avaliacaoDAO.prototype.reenviarTcc = function (data, callback) {
    this._conection.query("UPDATE candidatura SET situacao = 'em avaliacao', revisaoReprovacao = NULL, curso = ?, periodo = ?, modulo = ?," +
        " turma = ?, modalidade = ?, nomeResponsavel = ?, descricao = ?, resumo = ?, equipe = ?, nomeProjeto = ?, tipo = ? WHERE id = ?",
        [data.curso, data.periodo, data.modulo, data.turma, data.modalidade, data.nomeResponsavel, data.descricao, data.resumo, data.equipe,
            data.nomeProjeto, data.tipo, data.id
        ], callback);
};
avaliacaoDAO.prototype.reenviarExterno = function (data, callback) {
    this._conection.query("UPDATE candidatura SET situacao = 'em avaliacao', solicitante = ?, filiacao = ?, nomeResponsavel = ?," +
        "telefoneResponsavel = ?, emailResponsavel = ?, nomeProjeto = ?, orcamentoProjeto = ?, tipo = ?, resumo = ?, descricao = ?, " +
        "equipe = ?, revisaoReprovacao = NULL WHERE id = ?",
        [data.solicitante, data.filiacao, data.nomeResponsavel, data.telefoneResponsavel, data.emailResponsavel, data.nomeProjeto,
            data.orcamentoProjeto, data.tipo, data.resumo, data.descricao, data.equipe, data.id
        ], callback);
};
avaliacaoDAO.prototype.reenviarInterno = function (data, callback) {
    this._conection.query("UPDATE candidatura SET curso = ?, nomeProjeto = ?, nomeResponsavel = ?, tipo = ?,resumo = ?," +
        "descricao = ?, equipe = ?, situacao = 'em avaliacao', revisaoReprovacao = NULL WHERE id = ?",
        [data.curso, data.nomeProjeto, data.nomeResponsavel, data.tipo, data.resumo, data.descricao, data.equipe, data.id], callback);
};
// /REENVIAR
// /UPDATES
module.exports = function () {
    return avaliacaoDAO;
};