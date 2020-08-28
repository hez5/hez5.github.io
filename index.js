const express = require('express');
const app = express();

app.get(['/', 'index.html'], (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/script1.js', (req, res) => {
	res.sendFile(__dirname + '/script1.js');
});

app.get('/script2.js', (req, res) => {
	res.sendFile(__dirname + '/script2.js');
});

app.listen(3000, () => console.log('Atomics app op: http://localhost:3000!'));
