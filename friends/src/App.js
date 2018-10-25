import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import FriendList from './components/FriendList';
import NewFriend from './components/NewFriend';

class App extends Component {
  constructor() {
    super();
    this.state = {
        friends: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.youAreNotMyFriend = this.youAreNotMyFriend.bind(this);
  }

  componentDidMount() {
      const self = this;
      axios.get('http://localhost:5000/friends')
          .then(function (response) {

              const friendArr = [];
              response.data.map(friend => {
                  return friendArr.push([friend.id, friend.name, friend.age, friend.email])
              });

              self.setState({
                  friends: friendArr
              });
          })
          .catch(function (error) {
              console.log(error);
          });
  }

  youAreNotMyFriend(e, id) {
      e.preventDefault();
      const self = this;  

      axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response);

        const friendArr = [];
              response.data.map(friend => {
                  return friendArr.push([friend.id, friend.name, friend.age, friend.email])
        });

        self.setState({
            friends: friendArr
        });

      })
      .catch(err => console.log(err))
  }

  handleSubmit(e, name, age, email) {
    const random = Math.floor((Math.random() * 1000000000000000) + 1);
    e.preventDefault();
    const self = this;
    
    axios.post('http://localhost:5000/friends', {
        id: random,
        name: name,
        age: age,
        email: email
    })
    .then(response => {
        console.log(response);

        const friendArr = [];
              response.data.map(friend => {
                  return friendArr.push([friend.id, friend.name, friend.age, friend.email])
        });

        self.setState({
            friends: friendArr
        });

    })
    .catch(error => {
        console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={ props => <FriendList friends={this.state.friends} youAreNotMyFriend={this.youAreNotMyFriend} {...props}/>}></Route>
        <Route path='/addfriend' render={ props => <NewFriend handleSubmit={this.handleSubmit}  {...props} />}></Route>
      </div>
    );
  }
}

export default App;
