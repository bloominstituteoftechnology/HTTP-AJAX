import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import FormAndFriendsList from './components/FormAndFriendsList';
import Friend from './components/Friend';

class App extends Component {
  state = {
    friendsData: [],
    name: "",
    age: "",
    email: ""
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFriendSubmit = e => {
    e.preventDefault();

    const newFriend = { name: this.state.name, age: this.state.age, email: this.state.email };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        this.setState({ friendsData: response.data, name: "", age: "", email: "" });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">

        <Route exact path="/" render={(props) =>
          <FormAndFriendsList name={this.state.name}
                              age={this.state.age}
                              email={this.state.email}
                              handleChange={this.handleChange}
                              handleFriendSubmit={this.handleFriendSubmit}
                              friends={this.state.friendsData} />
        }/>

        <Route path="/friends/:id" render={(props) =>
          <Friend {...props} />
        }/>

      </div>
    );
  }
}

export default App;
