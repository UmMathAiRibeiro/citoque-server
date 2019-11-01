const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: 'C:/Users/fiec/Desktop/citoque/server/uploads'
});
module.exports = function (app) {
    app.post('/upload', multipartMiddleware,
        (req, res) => {
            const files = req.files;
            // console.log(files);
            res.json();

        });
};