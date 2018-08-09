import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
import FriendPage from './components/FriendPage';


class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends')
        .then(response => {
            console.log(response.data);
            this.setState({
                friends: response.data
            })
        })
}

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(function (response) {
        this.setState({friends: response.data})
        this.state.friends.map((index) => axios.put(`http://localhost:5000/friends/${index}`, {id: index}))
        this.componentDidMount();
    })
    .then(function (error) {
        console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={(props) => (<Friends {...props} array={this.state.friends} />)} />
        <Route path ="/friends/:id" render={(props) => (<FriendPage array={this.state.friends} delete={this.deleteFriend} {...props} />)} />
      </div>
    );
  }
}

export default App;
