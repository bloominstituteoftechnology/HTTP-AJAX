import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import FriendList from './Components/FriendList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
      newFriend: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(err => {
        console.error(err);
      });
  }

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  emptyCheck = () => {
    console.log(this.state)
    const name = this.state.name;
    const age = this.state.age;
    const email = this.state.email;
    let result = true;
    
    if (name.trim() === "") result = false;
    else if (age.trim() === "" || age > 120) result = false;
    else if (email.trim() === "") result = false;
    else if (email.indexOf('@') < 0) result = false;
    else if (email.indexOf('.com') < 0) result = false;
    console.log(result)
    return result;
  }

  addInput = e => {
    e.preventDefault();
    let id = this.state.friends.length + this.state.newFriend.length;
    if (this.emptyCheck()){
      const { newFriend } = this.state;
      newFriend.push({
        id: id,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      });
      this.setState({ newFriend, name: '', age: '', email: '' });
    }
  };

  saveInput = () => {
    const { newFriend } = this.state;
    newFriend.forEach(friend=> {
      axios
        .post('http://localhost:5000/friends', friend)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.err(err);
        });
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.addInput} >
          Name:
          <input className="input" name='name' value={this.state.name} onChange={this.updateInput} type="text" placeholder="Friend's Name Here" />
          Age:
          <input className="input" name='age' value={this.state.age} onChange={this.updateInput} type="number" placeholder="Friend's Age Here" />
          E-mail:
          <input className="input" name='email' value={this.state.email} onChange={this.updateInput} type="email" placeholder="Friend's Email Here" />
        </form>
        <button className="button button-add" onClick={this.addInput} > Add New Friend </button>
        <button className="button button-save" onClick={this.saveInput} >Save New Friend(s)</button>
        <Route path="/" 
        render={(props) => <FriendList {...props} friends={this.state.friends} newFriend={this.state.newFriend} onClick={this.addInput} /> } 
        />
      </div>
    );
  }
}

export default App;
