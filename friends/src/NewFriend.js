import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';


handleSubmitNewFriend() {
    axios.post('http://localhost:5000/friends', {
      newFriendName: this.newFriendName.value,
      newFriendAge: this.newFriendAge.value,
      newFriendEmail: this.newFriendEmail.value


    })
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log(`There was an error adding a new friend: ${error}`);
    });
  }
