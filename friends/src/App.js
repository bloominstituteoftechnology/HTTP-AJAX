import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import FriendList from './components/FriendList';
import NewFriend from './components/NewFriend';
import EditFriend from './components/EditFriend';

class App extends Component {
  constructor() {
    super();
    this.state = {
        friends: [],
        currentFriend: []
    };

    this.addNewFriendHandleSubmit = this.addNewFriendHandleSubmit.bind(this);
    this.editFriendHandleSubmit = this.editFriendHandleSubmit.bind(this);
    this.youAreNotMyFriend = this.youAreNotMyFriend.bind(this);
    this.passProperties = this.passProperties.bind(this);
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
        self.props.history.push('/');
      })
      .catch(err => console.log(err))
  }

  addNewFriendHandleSubmit(e, name, age, email) {
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

        this.props.history.push('/');

    })
    .catch(error => {
        console.log(error);
    });
  }

  passProperties(e, id, name, age, email) {
    e.preventDefault();

    this.setState({
        currentFriend: [id, name, age, email],
    });

    this.props.history.push('/editfriend');
  }

  editFriendHandleSubmit(e, id, name, age, email) {
    e.preventDefault();
    const self = this;

    axios.put(`http://localhost:5000/friends/${id}`, {
        name,
        age,
        email
    })
    .then(res => {
        console.log(res.data)
        const friendArr = [];
              res.data.map(friend => {
                  return friendArr.push([friend.id, friend.name, friend.age, friend.email])
        });

        self.setState({
            friends: friendArr
        });

        self.props.history.push('/');
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={ props => <FriendList friends={this.state.friends} youAreNotMyFriend={this.youAreNotMyFriend} passProperties={this.passProperties} {...props}/>}></Route>
        <Route path='/addfriend' render={ props => <NewFriend addNewFriendHandleSubmit={this.addNewFriendHandleSubmit}  {...props} />}></Route>
        <Route path='/editfriend' render={ props => <EditFriend editFriendHandleSubmit={this.editFriendHandleSubmit} currentFriend={this.state.currentFriend}  {...props} />}></Route>
      </div>
    );
  }
}

export default withRouter(App);
