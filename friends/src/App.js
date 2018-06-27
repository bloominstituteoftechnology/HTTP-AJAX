import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import FriendList from './Components/FriendList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
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
    else if (name.split(' ').length <2) result = false;
    else if (age.trim() === "" || age > 120) result = false;
    else if (email.trim() === "") result = false;
    else if (email.indexOf('@') < 0) result = false;
    else if (email.indexOf('.com') < 0) result = false;
    console.log(result)
    return result;
  }

  addInput = e => {
    e.preventDefault();
    if (this.emptyCheck()){
      const { friends } = this.state;
      friends.push({
        id: this.state.friends.length,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      });
      this.setState({ friends, name: '', age: '', email: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addInput} >
          <input className="input" name='name' value={this.state.name} onChange={this.updateInput} type="text" placeholder="Friend Name Here" />
          <input className="input" name='age' value={this.state.age} onChange={this.updateInput} type="number" placeholder="Friend Age Here" />
          <input className="input" name='email' value={this.state.email} onChange={this.updateInput} type="text" placeholder="Friend Email Here" />
          <button>Add Friend</button>
        </form>
        <Route path="/" 
        render={(props) => <FriendList {...props} friends={this.state.friends} onClick={this.addInput} /> } 
        />
      </div>
    );
  }
}

export default App;