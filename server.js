const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const friends = [
	{
		name: 'Ben',
		age: 30,
		email: 'ben@lambdaschool.com',
	},
	{
		name: 'Austen',
		age: 45,
		email: 'austen@lambdaschool.com',
	},
	{
		name: 'Ryan',
		age: 15,
		email: 'ryan@lambdaschool.com',
	},
	{
		name: 'Michelle',
		age: 67,
		email: 'michelle@gmail.com',
	},
];

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json());

app.use(cors());

app.get('/friends', (req, res) => {
	res.send(friends);
});

app.post('/new-friend', (req, res) => {
	friends.push(req.body);
	res.send(friends);
});

app.listen(5000, () => {
	console.log('server listening on port 5000');
});
