import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';
import {Route, Redirect} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        //console.log(res);
        this.setState({friends: res.data});
      })
      .catch(err => console.log('err', err));
  }

  addFriend = newFriend => {
    // add new friend if all fields are filled out
    if (newFriend.name && newFriend.age && newFriend.email) {
      axios
        .post('http://localhost:5000/friends', newFriend)
        .then(res => {
          this.setState({friends: res.data});
        })
        .catch(err => console.log(err));
    }
  };

  updateFriend = id => {
    //const friend = this.state.friends.filter()
    console.log(id);
    //<Redirect to="/" />
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              addFriend={this.addFriend}
            />
          )}
        />
        <Route
          path="/update/:id"
          component={FriendForm}
        />
      </div>
    );
  }
}

export default App;
