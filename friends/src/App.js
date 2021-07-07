import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import axios from 'axios';
import FriendsForm from './components/FriendsForm';

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
        <FriendsList list={this.state.list} />

        <FriendsForm addFriend = {this.addFriend} handleInput = {this.handleInput} state = {this.state}/>

      </div>
    );
  }
}

export default App;
