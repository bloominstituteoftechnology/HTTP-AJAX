import React, { Component } from 'react';
import FriendsView from './FriendsView.js';
import NewFriendForm from './NewFriendForm.js';
import './App.css';

const axios = require("axios");


class App extends Component {

  constructor(params) {
    super(params);
    this.state = {
      data: null,
      name: "",
      age: "",
      email: ""
    }
  }

  handleFormType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFormSubmit = () => {
    axios
      .post(`http://localhost:5000/friends`, {
        id: this.state.data.length + 1,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => {
        this.setState({
          data: response.data,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => {
        console.log(err);
      });

  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then((result) => this.setState({data: result.data}));
  }

  render() {
    return (
      <div className="App">
        <NewFriendForm onForm={this.handleFormType} onButton={this.handleFormSubmit} ageValue={this.state.age} nameValue={this.state.name} emailValue={this.state.email} />
        <FriendsView data={this.state.data} />
      </div>
    );
  }
}

export default App;
