import React, { Component } from 'react';
import FriendCardsContainer from './components/FriendCardsContainer';
import PostFriend from './components/PostFriend';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';

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

           this.setState({ friends: res.data })
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

           this.setState({ friends: res.data })
         })
         .catch(err => {
           console.log(err);
           this.setState({
             updateSuccessMessage: "",
             updateError: "Update Failed!"
           });
         })

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
        <Route path='/' component={Navigation} />
        <Route exact path='/' render={(props) => <PostFriend postFriendToServer={this.postFriendToServer}
                            postSuccessMessage={this.state.postSuccessMessage}
                            postError={this.state.postError}
                            updateFriend={this.updateFriend}
                            updateSuccessMessage={this.updateSuccessMessage}
                            updateError={this.updateError}
                            friends={this.state.friends}
                            />} />

        <Route path='/friends' render={(props) => <FriendCardsContainer friends={this.state.friends}
                                                                        deleteFriend={this.deleteFriend}/>} />


      </div>
    );
  }
}

export default App;
