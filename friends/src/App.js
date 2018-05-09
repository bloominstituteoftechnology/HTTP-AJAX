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
    let tempData = this.state.data.slice();
    tempData.push({
      id: tempData.length + 1,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({
      data: tempData,
      name: "",
      age: "",
      email: ""
    });

  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then((result) => this.setState({data: result.data}));
  }

  render() {
    return (
      <div className="App">
        <NewFriendForm onForm={this.handleFormType} onButton={this.handleFormSubmit} />
        <FriendsView data={this.state.data} />
      </div>
    );
  }
}

export default App;
