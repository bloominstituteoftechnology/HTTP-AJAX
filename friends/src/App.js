import React, { Component } from 'react';
import Axios from 'axios';
import FriendBuilder from './components/friendbuilder';
import FriendsList from './components/friendslist';

class App extends Component {
  constructor() {
    super();
    this.dataSource = 'http://localhost:5000/friends';
    this.state = {
      friends: [],
      name: '',
      age: 0,
      email: '',
      updating: false
    };
  }

  componentDidMount = () => {
    this.getServerData();
  };

  getServerData = () => {
    Axios
      .get(this.dataSource)
      .then( (response) => this.setFriends(response.data) )
      .catch( (err) => console.error(err) );
  };

  setFriends = (friendArr) => {
    this.setState({
      friends: friendArr,
      name: '',
      age: 0,
      email: '',
      updating: false
    });
  };

  postFriend = (event) => {
    event.preventDefault();
    if(event.target.name && event.target.age && event.target.email) {
      Axios
        .post(this.dataSource, {
          name: this.state.name,
          age: this.state.age,
          email: this.state.email
        })
        .then( (response) => this.setFriends(response.data) )
        .catch( (err) => console.error(err) );
    }
  };

  putFriend = (event, friend) => {
    event.preventDefault();
    console.log(`PUT the friend ${friend.name.toUpperCase()}!`);
    Axios
      .put(`${this.dataSource}/${friend.id}`, {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then( (response) => this.setFriends(response.data) )
      .catch( (err) => console.error(err) );
  };

  deleteFriend = (event, id) => {
    event.preventDefault();
    console.log(`DELETE the friend with id ${id} :,(`);
    Axios
      .delete(`${this.dataSource}/${id}`)
      .then( (response) => this.setFriends(response.data) )
      .catch( (err) => console.error(err) );
  };

  handleInput = (event) => {
    if(event.target.name === 'age') {
      this.setState({ [event.target.name]: Number(event.target.value) });
    } else {
      this.setState({ [event.target.name]: event.target.value.toString() });
    }
  };

  handleEdit = (friend) => {
    this.setState({
      currentName: friend.name,
      currentAge: friend.age,
      currentEmail: friend.email,
      updating: true
    });
  };

  render() {
    return (
      <div>
        <FriendBuilder 
          handleInput={this.handleInput} 
          postFriend={this.postFriend} 
          putFriend={this.putFriend} 
          currentName={this.state.name} 
          currentAge={this.state.age} 
          currentEmail={this.state.email} 
          updating={this.state.updating} 
        />
        <FriendsList 
          friends={this.state.friends} 
          handleEdit={this.handleEdit} 
          deleteFriend={this.deleteFriend} 
        />
      </div>
    );
  }
}

export default App;
