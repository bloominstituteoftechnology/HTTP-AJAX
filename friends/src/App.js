import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendList from './components/FriendList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
        friends: []
    };
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

  render() {
    return (
      <div>
        <Route exact path='/' render={ props => <FriendList friends={this.state.friends} {...props}/>}></Route>
      </div>
    );
  }
}

export default App;
