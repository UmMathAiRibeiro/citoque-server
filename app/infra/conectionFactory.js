const mysql = require('mysql');
const credenciais = require('../../config/secret.json').mysql

function criarConexao() {
    return mysql.createConnection(credenciais)
}

module.exports = function () {
    return criarConexao
}