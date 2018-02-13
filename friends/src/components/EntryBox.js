import React, { Component } from 'react';
import axios from 'axios';

class EntryBox extends Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" id="name"/>
        </label>
        <label>
          Age:
          <input type="text" name="age" id="age"/>
        </label>
        <label>
          Email:
          <input type="text" name="email" id="email"/>
        </label>
        <input type="submit" value="Submit" onClick={this.SubmitForm()} />
      </form>
    )
  }
  SubmitForm() {
  axios.post('http://localhost:5000/friends', {
      name: document.getElementById('name').value,
      age: document.getElementById('age').value,
      email: document.getElementById('email').value,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default EntryBox;
