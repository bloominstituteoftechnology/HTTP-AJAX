import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Button, Form, Input, Label } from 'reactstrap';
import axios from 'axios';

import './AddFriend.css';

class AddFriend extends Component {

  addFriend(event) {
      event.preventDefault();
      const friend = {
          name: document.getElementById('Name').value,
          email: document.getElementById('Email').value,
          age: document.getElementById('Age').value,
      };
      axios.post('http://localhost:5000/friends', friend)
        .then(() => {
            return(
        <Redirect to="/" />
            )
        })
        .catch((error) => {
            console.log(error);
        });
    }

  render() {
    return (
      <div className='addFriend'>
          <h1> Add Friend </h1>
            <Form className='form' onSubmit={this.addFriend}>
                <Label for="Name">Name</Label>
                <Input type="text" name="name" id="Name" placeholder="Name" />
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="Email" placeholder="Email" />
                <Label for="Age">Age</Label>
                <Input type="number" name="age" id="Age" placeholder="Age" />
                <Input className='submit' type="submit" value='Submit'  />
            </Form>
          <Link to={`/`} className='listLink'> <Button color="warning"> Friends List </Button> </Link>
      </div>
    );
  }
}

export default AddFriend;

// app.post('/friends', (req, res) => {
//     const friend = { id: getNewId(), ...req.body };
//     friends = [...friends, friend];
//     res.status(201).json(friends);
//   });