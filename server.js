const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('static'));

// app.get('/', function (req, res) {
//     res.render(`${__dirname}/static/index.html`);
// });

// app.put('/', function (req, res) {
//     res.sendFile(`${__dirname}/static/index.html`);
// });
// var http = require('http').Server(app);

app.listen(PORT, function () {
    console.log(`Send static to port:${PORT}`);
});
