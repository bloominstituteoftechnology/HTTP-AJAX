import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendsList from "./components/FriendsList"

class App extends Component {
    constructor() {
      super();
      this.state = {
        friends:[],
        name: "",
        age: "",
        email: ""
      };
    }

    componentDidMount() {
      axios
        .get('http://localhost:5000/friends')
        .then(response => {
          console.log(response)
          this.setState({ friends: response.data});
        })
        .catch(err => console.log(err));
    }

    handleChange = (event) => {
      this.setState({
      [event.target.name]: event.target.value
      })
    }

    addNewFriend = () => {
      const newFriend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      }

      axios.post('http://localhost:5000/friends', newFriend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
    };

  render() {
    return <div className="app">
        <h1>List of Friends</h1>
        <form onSubmit={this.addNewFriend}>
          <input onChange= {this.handleChange} name= "name" value={this.state.name} placeholder= "name" type= "text" />
          <input onChange= {this.handleChange} name= "age" value={this.state.age} placeholder= "age" type= "number" />
          <input onChange= {this.handleChange} name= "email" value={this.state.email} placeholder= "email" type= "email" />
          <button onClick= {this.addNewFriend} >Add Friend</button>
        </form>
          <FriendsList
            friends={this.state.friends} 
          />
        )}
      </div>;
  }
}

export default App;
