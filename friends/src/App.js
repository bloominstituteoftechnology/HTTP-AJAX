import React, { Component } from 'react';
import './App.css';
import { FriendsList, Form, Navigation } from "./components/";
import axios from "axios";
import { Route } from "react-router-dom";

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
        <Navigation />
        <Route exact path="/" render={props => <FriendsList data={this.state.data}/>}/>
        <Route path="/addfriend" component={Form}/>
      </div>
    );
  }
}

export default App;
