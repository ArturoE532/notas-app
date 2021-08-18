const app = require ('./server');

app.listen(app.get('port'), () => {
    console.log('Server en el puerto ',app.get('port'))
})