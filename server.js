const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: 1,
    name: 'Ben',
    age: 30,
    location: 'Mars',
    email: 'ben@lambdaschool.com',
  },
  {
    id: 2,
    name: 'Austen',
    age: 32,
    location: 'USA',
    email: 'austen@lambdaschool.com',
  },
  {
    id: 3,
    name: 'Ryan',
    age: 35,
    location: 'Earth',
    email: 'ryan@lambdaschool.com',
  },
  {
    id: 4,
    name: 'Sean',
    age: 35,
    location: 'Pluto',
    email: 'sean@lambdaschool.com',
  },
  {
    id: 5,
    name: 'Michelle',
    age: 67,
    location: 'Moon',
    email: 'michelle@gmail.com',
  },
  {
    id: 6,
    name: 'Luis',
    age: 47,
    location: 'Texas',
    email: 'luis@lambdaschool.com',
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.post('/friends', (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put('/friends/:id', (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete('/friends/:id', (req, res) => {
	friends = friends.filter(friend => friend.id != req.params.id);
	res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
