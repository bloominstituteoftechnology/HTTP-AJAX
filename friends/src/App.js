import React, { Component } from 'react';
import FriendCard from './components/FriendCard';
import PostFriend from './components/PostFriend';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      postSuccessMessage: "",
      postError: "",
      deleteSuccessMessage: "",
      deleteError: "",
      updateSuccessMessage: "",
      updateError: "",
    }
  }

  getFriends = () => {
    axios.get('http://localhost:5000/friends')
         .then(res => {
           this.setState({ friends: res.data })
         })
         .catch(err => console.log(err));
  }

  postFriendToServer = friend => {
    axios.post('http://localhost:5000/friends', friend)
         .then(res => {
           console.log(res);
           this.setState({
             postSuccessMessage: "Success!",
             postError: ""
           });
         })
         .catch(err => {
           console.log(err);
           this.setState({
             postSuccessMessage: "",
             postError: "Error!"
           });
         });
    this.getFriends();
  }

  updateFriend = (friend, id) => {
    console.log('Friend: ', friend)
    axios.put(`http://localhost:5000/friends/${id}`, friend)
         .then(res => {
           console.log(res);
           this.setState({
             updateSuccessMessage: "Update Successful!",
             updateError: ""
           });
         })
         .catch(err => {
           console.log(err);
           this.setState({
             updateSuccessMessage: "",
             updateError: "Update Failed!"
           });
         })
    this.getFriends();
  }

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
         .then(res => {
           console.log(res);
           this.setState({
             deleteSuccessMessage: "Successful Delete!",
             deleteError: ""
           });
         })
         .catch(err => {
           console.log(err);
           this.setState({
             postSuccessMessage: "",
             postError: "Error!"
           });
         });
    this.getFriends();
  }

  componentDidMount() {
    this.getFriends();
  }

  render() {
    return (
      <div className="App">
        <PostFriend postFriendToServer={this.postFriendToServer}
                    postSuccessMessage={this.state.postSuccessMessage}
                    postError={this.state.postError}
                    updateFriend={this.updateFriend}
                    updateSuccessMessage={this.updateSuccessMessage}
                    updateError={this.updateError}
                    friends={this.state.friends}
                    />

        {this.state.friends.map(friend => <FriendCard key={Math.random()}
                                                      friend={friend}
                                                      id={friend.id}
                                                      deleteHandler={this.deleteFriend}/>)}
      </div>
    );
  }
}

export default App;