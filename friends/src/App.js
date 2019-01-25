import React, {Component} from 'react';
import './App.scss';
import axios from 'axios';
import {Route} from 'react-router-dom';
import FriendWrapp from './comps/friendWrapp.js';
import Form from './comps/form.js';
import SingleFriend from './comps/singleFriend.js';
import Home from './comps/home.js';
import EditFriend from './comps/editFriend.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://www.localhost:5000/friends')
      .then(data => this.setState({friends: data.data}))
      .catch(err => console.log('Error', err.message));
  }

  updateFriends = friends => {
    this.setState({friends: friends.data});
  };

  deleteFriend = friend => {
    axios
      .delete(`http://www.localhost:5000/friends/${friend}`)
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state.friends);
    return (
      <div className="App">
        <Route path="/" component={Home} />
        <Route
          exact
          path="/friends"
          render={props => (
            <FriendWrapp
              friends={this.state.friends}
              {...props}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => <Form {...props} updateState={this.updateFriends} />}
          newId={this.state.friends.length + 1}
        />
        <Route
          exact
          path="/friends/:id"
          render={props => (
            <SingleFriend
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route
          exact
          path="/friends/:id/edit"
          render={props => (
            <EditFriend
              {...props}
              friends={this.state.friends}
              updateState={this.updateFriends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
