import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendList from './Components/FriendList';
import './App.css';
import AddFriends from './Components/AddFriends';


class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      name: '',
      age: '',
      email: ''
    }
  }

  handleInput = ( event ) => {
    this.setState({ [event.target.name]: event.target.value })   
  }


  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
    .then ( response => { this.setState({ list: response.data } );
  })
    .catch (error => console.log(error)); 
  }

  addNewFriend = ( event ) => {
    event.preventDefault();
    const newFriend = { name: this.state.name, age: this.state.age, email: this.state.email };
    axios.post(`http://localhost:5000/friends`, newFriend)
    .then( response => { this.setState({ list: response.data, name: '', age: '', email: '' })
    })
    .catch (error => console.log(error));     
  }

  updateFriend = ( id ) => {
    const updateInfo = { name: this.state.name, age: this.state.age, email: this.state.email };
    axios.put(`http://localhost:5000/friends/${id}`, updateInfo)
    .then( response => {this.setState({ list: response.data, name: '', age: '', email: '' })
    })
    .catch (error => console.log(error));
  }

  deleteFriend = ( id ) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then( response => {this.setState({ list: response.data, name: '', age: '', email: '' })
    })
    .catch (error => console.log(error));
  }


  render() {
    return (
      <div className="App">
      <h1>List of Awesome!</h1>
        <AddFriends 
          addNewFriend={this.addNewFriend.bind(this)} 
          handleInput={this.handleInput.bind(this)}
        />
        <FriendList friends={this.state.list} />        
      </div>
    );
  }
}

export default App;
