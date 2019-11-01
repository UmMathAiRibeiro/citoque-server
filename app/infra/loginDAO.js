function loginDAO(conection) {
    this._conection = conection;
}
loginDAO.prototype.login = function (data, callback) {
    this._conection.query('SELECT count(*) as count FROM usuario WHERE email=? and senha=sha2(?,512)',
        [data.email, data.senha], callback);
};
loginDAO.prototype.pegaLogin = function (data, callback) {
    this._conection.query('SELECT usuario.iduser, usuario.nome, usuario.tipo FROM usuario WHERE email=? and senha=sha2(?,512)',
        [data.email, data.senha], callback);
};
module.exports = function () {
    return loginDAO;
};