import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/NavComponents/Navigation';
import FriendsList from './components/FriendComponents/FriendsList';
import FriendForm from './components/FriendComponents/FriendForm';

const API = "http://localhost:5000/friends";

class App extends React.Component {
  constructor(){
    super();
      this.state = {
        friends:[]
      };

}
componentDidMount() {
  axios
    .get(API)
    .then(response => this.setState({ friends: response.data }))
    .catch(err => {console.log(err)});
}

addFriend = (newFriend) => {
  axios
    .post(API, newFriend)
    .then(res => this.setState({ friends: res.data }, this.props.history.push('/')))
    .catch(err => {console.log(err)});
}
  render() {
    return (
      <div className="App">
        <Navigation />
       <Route exact path="/" render={()=> <FriendsList friends={this.state.friends} />} />
       <Route path="/add-friend" render={(props) => <FriendForm friends={this.state.friends} addFriend={this.addFriend} />} />
      </div>
    );
  }
}

export default App;
