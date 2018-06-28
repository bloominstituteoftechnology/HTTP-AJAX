import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import './App.css';
import axios from 'axios';

import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import UpdateDeleteFriend from './components/UpdateDelete';

class App extends Component {
  constructor () {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: ''
    }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(friendsData => this.setState({ friends: friendsData.data}))
    .catch(error => console.log(error));
  }

  handleChange = (e) => {
    //create shallow copy of newFriend
    const newFriend = Object.assign({}, this.state.newFriend);
    newFriend[e.target.name] = e.target.value;
    this.setState({ newFriend });
}

  addNewFriend = () => {
    const newFriend = this.state.newFriend;
    axios.post('http://localhost:5000/friends', newFriend)
    .then(response => {
      this.setState({ friends: response.data,
      newFriend: {
        name: '',
        age:'',
        email: ''
      } });
    });
  }

  updateFriends = (data) => {
    this.setState({friends: data});
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <Route exact path="/" render={(props) => <FriendList {...props} friendList = {this.state.friends}/>} />
        <Route exact path="/add" render={props => <AddFriend {...props} addFriendHandler={this.addNewFriend} handleChange={this.handleChange} newFriend={this.state.newFriend}/>} />
        <Route exact path="/friends/:id" render={(props) => <UpdateDeleteFriend {...props} updateFriends = {this.updateFriends}/>}/>
      </div>
    );
  }
}

export default App;
