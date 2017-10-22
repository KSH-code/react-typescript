const app = require('express')();
const fs = require('fs');
app.route('/').get((req, res) => {
    fs.readFile('./index.html', (e, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
})

app.listen(8080);