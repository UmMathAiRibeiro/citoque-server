const app = require('./config/express')
app().listen(3005, () => {
    console.log('CITEC na porta 3005');
})