const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const friends = [
	{
		name: 'Ben',
		age: 30,
		email: 'ben@lambdaschool.com',
		pet1:{species:'dog',name:'Fido'},
		pet2:{species:'cat', name:'Tigger'}
	},
	{
		name: 'Austen',
		age: 45,
		email: 'austen@lambdaschool.com',
		pet1:{species:'bear',name:'Smokey'},
		pet2:{species:'cat', name:'Garfield'}
	},
	{
		name: 'Ryan',
		age: 15,
		email: 'ryan@lambdaschool.com',
		pet1: {species:'dog',name:'Hairy Pawter'},
		pet2: {species:'cat', name:'Simba'}
			
	},
	{
		name: 'Michelle',
		age: 67,
		email: 'michelle@gmail.com',
		pet1: {species:'dog',name:'Bluto'},
		pet2: {species:'cat', name:'Sylvester'}	
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
