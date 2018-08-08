import React, { Component } from 'react';
import FriendsView from './FriendsView.js';
import NewFriendForm from './NewFriendForm.js';
import { Route } from 'react-router-dom';
import './App.css';

const axios = require("axios");


class App extends Component {

  constructor(params) {
    super(params);
    this.state = {
      data: null,
      name: "",
      age: "",
      email: "",
      newId: 0
    }
  }

  handleFormType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleDelete = (id) => {
    console.log(`http://localhost:5000/friends/${id}`);
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then((result) => this.setState({data: result.data }));
  }

  handleFormSubmit = () => {
    axios
      .post(`http://localhost:5000/friends`, {
        id: this.state.newId,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => {
        this.setState({
          data: response.data,
          name: "",
          age: "",
          email: "",
          newId: this.state.newId + 1
        });
      })
      .catch(err => {
        console.log(err);
      });

  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then((result) => this.setState({data: result.data, newId: result.data.length + 1}));
  }

  render() {
    return (
      <div className="App">

        <Route exact path="/new" render={() => (
          <NewFriendForm onForm={this.handleFormType} onButton={this.handleFormSubmit} ageValue={this.state.age} nameValue={this.state.name} emailValue={this.state.email} />
        )} />
        <Route exact path="/" render={() => (
          <FriendsView data={this.state.data} delete={this.handleDelete} />
        )} />
      </div>
    );
  }
}

export default App;
