import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
import FriendWrapp from './comps/friendWrapp.js';
import Form from './comps/form.js';
import SingleFriend from './comps/singleFriend.js';
import Home from './comps/home.js';

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

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <Route path="/" component={Home} />
        <Route
          exact
          path="/friends"
          render={props => (
            <FriendWrapp friends={this.state.friends} {...props} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => <Form updateState={this.updateFriends} />}
          newId={this.state.friends.length + 1}
        />
        <Route
          exact
          path="/friends/:id"
          render={props => (
            <SingleFriend {...props} friends={this.state.friends} />
          )}
        />
      </div>
    );
  }
}

export default App;
