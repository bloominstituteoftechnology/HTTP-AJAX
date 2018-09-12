import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import axios from 'axios';

// Inside your React application, create a component to display the list of friends coming from the server.
// Add a form to gather information about a new friend.
// Add a button to save the new friend by making a POST request to the same endpoint listed above.
// Each friend should have the following properties:
// {
//   name: should be a string,
//   age: should be a number,
//   email: should be a string,
// }


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : [],
      newName : '',
      newEmail : '',
      newAge : ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
      this.setState({
        list : response.data
      })
      
    }).catch(err => console.log(err));
  }


  handleInput = event => {
    event.preventDefault();
    if(event.target.name === 'newName'){
      this.setState({
        newName : event.target.value
      })
    } else if (event.target.name === 'newAge'){
      this.setState({
        newAge : event.target.value
      })
    } else if (event.target.name === 'newEmail'){
      this.setState({
        newEmail : event.target.value
      })
    }
  }


  addFriend = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', {
      name: String(this.state.newName),
    age: Number(this.state.newAge),
  email: String(this.state.newEmail)}).then(response => this.setState({list: response.data})).catch(err => console.log(err));

  this.setState({
    newName: '',
    newAge: '',
    newEmail: ''
  });
  }

  render() {
    return (
      <div className="App">
        <FriendsList list={this.state.list} addFriend = {this.addFriend}></FriendsList>

        <form className = 'new-friend-form' onSubmit = {this.addFriend}>
                <h4>Add New Friend</h4>
                <input type='text' placeholder  = 'name' name='newName' value = {this.state.newName} onChange = {this.handleInput}></input>
                <input type = 'number' placeholder = 'age' name = 'newAge' value = {this.state.newAge} onChange = {this.handleInput}></input>
                <input type = 'email' placeholder = 'email' name = 'newEmail' value = {this.state.newEmail} onChange = {this.handleInput}></input>
                <button type = 'submit'>Add Friend</button>
            </form>

      </div>
    );
  }
}

export default App;
