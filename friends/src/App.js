import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import {Route} from 'react-router-dom';

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
        console.log(res);
        this.setState({friends: res.data});
      })
      .catch(err => console.log('err', err));
  }

  addFriend = e => {
    console.log('click');
    e.preventDefault();
    const newFriend = {
      name: e.target.name.value,
      age: e.target.age.value,
      email: e.target.email.value,
      id: Date.now(),
    };

    // add new friend if all fields are filled out
    if (newFriend.name && newFriend.age && newFriend.email) {
      axios
        .post('http://localhost:5000/friends', newFriend)
        .then(res => {
          this.setState({friends: res.data});
        })
        .catch(err => console.log(err));

      // clear inputs
      e.target.name.value = '';
      e.target.age.value = '';
      e.target.email.value = '';
    }
  };

  updateFriend = id => {
    //const friend = this.state.friends.filter()
    id.preventDefault();
    console.log(id);
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
          render={props => (
            <FriendForm {...props} updateFriend={this.updateFriend}/>
          )}
        />
      </div>
    );
  }
}

export default App;
