import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import FriendList from './Components/FriendList';
import FriendForm from './Components/FriendForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      id: '',
      name: '',
      age: '',
      email: '',
      newFriend: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data, id: response.data.length }));
      })
      .catch(err => {
        console.error(err);
      });
  }

  makeObject = () => {
    const { id, name, age, email } = this.state;
    const newObj = {
      id: id,
      name: name,
      age: age,
      email: email
    }
    return newObj;
  }

  updateInput = e => {
    console.log(this.state)
    this.setState({ [e.target.name]: e.target.value })
  }

  addInput = obj => {
    // if (this.emptyCheck()) {  //ensures no empty inputs or invalid formats
      const { newFriend } = this.state;
      newFriend.push(obj);
      this.setState({ newFriend, id: (this.state.id + 1), name: '', age: '', email: '' });
    // }
  };

  emptyCheck = () => {  //this is meant to lock the add friend button when all fields are empty
    console.log(this.state)
    const name = this.state.name;
    const age = this.state.age;
    const email = this.state.email;
    let result = true;

    if (name.trim() === "") result = false;  //blank name
    else if (age.trim() === "" || 13 > age > 120) result = false;   //reasonable age
    else if (email.trim() === "") result = false;  //would have been messy on a single line
    else if (email.indexOf('@') < 0) result = false;  //this will check email address
    else if (email.indexOf('.com') < 0) result = false;  //for some minor format
    console.log(result)
    return result;
  }

  saveInput = () => {
    const { newFriend } = this.state;
    newFriend.forEach(friend => {
      axios
        .post('http://localhost:5000/friends', friend)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.err(err);
        });
    })
    this.state.newFriend = [];  //bad practice but prevent re-render so that names dont disappear while being added
    // this.setState({ newFriend: [] }); //better method but re-renders... hard choice......
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route exact path="/"
          render={(props) => <FriendList {...props} saveInput={this.saveInput} friends={this.state.friends} newFriend={this.state.newFriend} onClick={this.addInput} />
        }/>      
        <Route path="/addFriend"
          render={(props) => <FriendForm addInput={this.addInput} id={this.state.id} updateInput={this.updateInput} />
        }/>  
      </div>
    );
  }
}

export default App;
