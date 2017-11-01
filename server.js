const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const friends = [
	{
		name: 'Ben',
		age: 30,
		email: 'ben@lambdaschool.com',
		pets: [
			{species:'dog',name:'Fido'},
			{species:'cat', name:'Tigger'}
		]
	},
	{
		name: 'Austen',
		age: 45,
		email: 'austen@lambdaschool.com',
		pets: [
			{species:'bear',name:'Smokey'},
			{species:'cat', name:'Garfield'}
		],		
	},
	{
		name: 'Ryan',
		age: 15,
		email: 'ryan@lambdaschool.com',
		pets: [
			{species:'dog',name:'Hairy Pawter'},
			{species:'cat', name:'Simba'}
		],		
	},
	{
		name: 'Michelle',
		age: 67,
		email: 'michelle@gmail.com',
		pets: [
			{species:'dog',name:'Bluto'},
			{species:'cat', name:'Sylvester'}
		],		
	},
];

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
