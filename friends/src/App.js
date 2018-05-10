import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from "./components/FriendsList";
import AddForm from "./components/AddForm";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: 0,
      email: ""
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }));
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("testing");
    let newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    }
    axios.post("http://localhost:5000/friends", newFriend)
      .then(response => {
        let newFriendArray = response.data.slice();
        this.setState({
          friends: newFriendArray,
          name: "",
          age: 0,
          email: ""
        });
      });
  }

  render() {
    return (
      <div>
          <div className='App headForm'>
        <h1>Sign Up!</h1>
        <AddForm
        input={this.handleInput.bind(this)}
        submit={this.handleSubmit.bind(this)}
        name={this.state.name}
        age={this.state.age}
        email={this.state.email}
        />
        </div>
        <div className='friendsBox'>
        <FriendsList friends={this.state.friends} />
        </div>
      
      </div>
    )

  }
}