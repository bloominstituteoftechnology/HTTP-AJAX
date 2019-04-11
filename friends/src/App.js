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
    }
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
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
         .then(res => {
           console.log(res);
           this.setState({ friends: res.data })
         })
         .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <PostFriend postFriendToServer={this.postFriendToServer}
                    postSuccessMessage={this.state.postSuccessMessage}
                    postError={this.state.postError}/>

        {this.state.friends.map(friend => <FriendCard key={Math.random()}
                                                      friend={friend}
                                                      id={friend.id}
                                                      deleteHandler={this.deleteFriend}/>)}
      </div>
    );
  }
}

export default App;

