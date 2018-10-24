import React, { Component } from 'react';
import axios from 'axios';
import HomePage from './Homepage';
import { Route } from 'react-router-dom';
import './App.css';
import FriendList from './Friendlist';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendlist: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friendlist: response.data });
      })
      .catch(error => {
        console.error('Server Error', error);

      });
  }
  addNewFriend = friend => {


    axios.post('http://localhost:5000/friends', friend)
      .then((response) => {
        console.log(response);
        this.setState(() => ({ friendlist: response.data }));
      })
      .catch(error => {
        console.log(error);
      });

    console.log(friend)
  }

  delete = (key) => {
    axios.delete(`http://localhost:5000/friends/${key}`)
      .then((response) => {
        console.log('delete', response);
        this.setState(() => ({ friendlist: response.data }));
      })
      .catch(error => {
        console.log(error);
      });

  }
  update = (key) => {
    axios.put(`http://localhost:5000/friends/${key}`)
      .then((response) => {
        console.log(response);
        this.setState(() => ({ friendlist: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
    console.log('thi', key)
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) => <HomePage {...props} newFriend={this.addNewFriend} />} />
        <Route path="/friendlist/" render={(props) => <FriendList {...props} delete={this.delete} friends={this.state.friendlist} />} />
      </div>
    );
  }
}

export default App;
