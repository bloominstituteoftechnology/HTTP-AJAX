import React, { Component } from 'react';
import './App.css';
import { FriendsList, Form } from "./components/";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then((response) => this.setState({data: response.data}))
    .catch(error => console.log(error))
  }

  handleSubmit() {
    let form = document.getElementById('addFriend');
    const formData = new FormData(form);
    axios.post('http://localhost:5000/friends', formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <FriendsList data={this.state.data}/>
        <Form/>
      </div>
    );
  }
}

export default App;
