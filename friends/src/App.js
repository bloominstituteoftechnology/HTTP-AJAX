import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListFriends from './Components/ListFriends';

class App extends Component {
  constructor() {
    super();
    this.state = {
    friends:[],
    newId: '99',
    newName:'',
    newAge: '',
    newEmail: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <form>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.newName}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Age:
            <input
              name="age"
              type="text"
              value={this.state.newAge}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.state.newEmail}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <button type='Submit' onClick={this.addNewFriend}> Submit </button>
        </form>
        <ListFriends friends={this.state.friends}/>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(error => {
        console.log('EROOORRRRR');
      })
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    
    if (target.name === 'name') return this.setState({newName: target.value});
    if (target.name === 'age') return this.setState({newAge: target.value});
    if (target.name === 'email') return this.setState({newEmail: target.value});
  }

  // addNewFriend(event) {
  //   event.preventDefault();
  //   const newFriend = {
  //     name: this.state.newName,
  //     age: this.state.newAge,
  //     email: this.state.newEmail,
  //   }
  //   axios.post('http://localhost:5000/friends', newFriend)
  //   .then(function (response) {
  //     return response.data.push[newFriend];
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
  


  
}


export default App;
