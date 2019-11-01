const load = require('consign')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function () {
    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    load({
        cwd: 'app',
        locale: 'pt-br',
        verbose: false
    }).include('infra').then('routes').into(app);
    return app;
}