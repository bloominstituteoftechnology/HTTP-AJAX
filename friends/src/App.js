import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
import FriendWrapp from './comps/friendWrapp.js';
import Form from './comps/form.js';
import Friend from './comps/friend.js';
import SingleFriend from './comps/singleFriend.js';

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

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
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
          component={Form}
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
