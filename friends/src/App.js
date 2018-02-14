import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListFriends from './Components/ListFriends';
import AddFriend from './Components/AddFriend';


class App extends Component {
  constructor() {
    super();
    this.state = {
    friends:[],
    };
   }

  render() {
    return (
      <div className="App">
      <div className='addBox'>Add Friends!<AddFriend onCreate={this.loadFriends}/></div>
      <div className='cardDisplay'>
        <ListFriends friends={this.state.friends} onDelete={this.deleteFriend}/>
      </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.loadFriends();
  }

 loadFriends = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({
          friends: response.data,
        });
      })
      .catch(error => {
        console.log('EROOORRRRR');
      })
  }

  deleteFriend = id => {
    const friend = `http://localhost:5000/friends/${id}`;
    axios
      .delete(friend)
      .then(response => {
        console.log('response from delete', response);
        this.setState({ friends: response.data });
      })
      .catch(() => {
        console.error('error deleting');
      });
  };
}


export default App;
