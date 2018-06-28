import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import FriendCard from './components/FriendCard';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
        newFriend: {
          name: '',
          age: 0,
          email: ''
      }
    }
  }

  handleChange = (e) => {
    this.setState({newFriend: {...this.state.newFriend, [e.target.name]: e.target.value }})

  }

  addFriend = () => {
    console.log(this.state.newFriend);
    Axios
    .post('http://localhost:5000/friends', this.state.newFriend)
    .then(response => {
      console.log(response);
      this.setState({friends: response.data, newFriend: {}});
    })
    .catch(err => {
      console.log(err);
    })
  }

  editFriendHandler = id => {

  }

  deleteFriend = id => {
    Axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      console.log(response);
      this.setState({friends: response.data});
    })
  .catch(err => {
    console.log(err);
  })
  }
  
  componentDidMount() {
    Axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log(response);
      this.setState({friends: response.data});
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="App">
      <Route exact path='/' render={(props) =><FriendsList {...props} 
      friends={this.state.friends} deleteFriend={this.deleteFriend} />} />
    <Route path='/newfriend' render={(props) =><FriendForm {...props} 
    newFriend={this.state.newFriend} 
    textHandler={this.handleChange} 
    addFriend={this.addFriend} 
    />}/>
    <Route path='/friend/:id' render={(props) =><FriendCard {...props} 
    deleteFriend={this.deleteFriend}/>}/>
      </div>
    );
  }
}

export default App;
