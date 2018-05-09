import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './friendslist';
import FriendsForm from './friendsform';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      name: " ",
      age: " ",
      email: " "
    };
  }

    componentDidMount() {
      axios.get("http://localhost:5000/friends")
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(error =>{
        console.log(error);
      });
    };

    // handleInputData = (event) => {
    //   this.setState({[event.target.name]: event.target.value})
    // }
    onSubmit = (event) => {
      event.preventDefault();
      if(this.state.name && this.state.age && this.state.email){
        const { name, age, email} = this.state;
        axios.post('http://localhost:5000/friends', { name, age, email})
        .then((result => { console.log("success")}))
        .catch((error =>
           console.log(error);
        })
      } 
    }

    handleSubmitChange = (event) => {
      console.log("This was invoked")
      event.preventDefault();
      const friends = this.state.friends;
      this.setState({ friends });

    }

  
  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FriendsList friends={this.state.friends}/>
        <FriendsForm onSubmit={this.handleSubmitChange} />
      </div>
    );
  }
}

export default App;
