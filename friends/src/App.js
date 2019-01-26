import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import './App.css';
import UpdateFriend from './components/UpdateFriend';

class App extends Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: ''
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err));
  }

  deleteFriend = e => {
    axios
      .delete(`http://localhost:5000/friends/${e.target.id}`)
      .then(res => this.setState({ friends: res.data, name: '', age: '', email: '' }))
      .catch(err => console.log(err));
  }

  addFriend = event => {
    event.preventDefault()
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res => this.setState({
        friends: res.data,
        id: '',
        name: '',
        age: '',
        email: ''
      }))
      .catch(err => console.log(err));
  }

  updateFriend = () => {

  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <FriendsForm
          changeHandler={this.changeHandler}
          addFriend={this.addFriend}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email} />

        <Route 
          exact
          path='/'
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              update={this.updateFriend}
              deleteFriend={this.deleteFriend} />
          )}
        />

        <Route
          exact
          path='/updatefriend'
          render={props => (
            <UpdateFriend
              {...props}
              changeHandler={this.changeHandler}
              updateFriend={this.updateFriend}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
