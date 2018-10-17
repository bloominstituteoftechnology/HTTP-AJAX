import React, { Component } from 'react';
import axios from 'axios';
import FriendForm from './FriendForm';
import FriendList from './FriendList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: '',
      },
      url: 'http://localhost:5000',
      updateFriend: false,
    }
  }

  componentDidMount() {
    axios.get(`${this.state.url}/friends`,)
      .then(({data}) => this.setState({friends: data}))
      .catch(err => console.error(err));
  }

  addNewFriend = (ev) => {
    ev.preventDefault();
    let empty = false;
    Object.values(this.state.newFriend).forEach(n => n === ''?empty=true:null);
    if(empty) return;

    if (this.state.updateFriend) {
      axios.put(`${this.state.url}/friends/${this.state.newFriend.id}`, this.state.newFriend)
      .then(({data}) => this.setState({friends: data, newFriend: {name: '', age: '', email: ''}}))
      .catch(err => console.error(err));
      return;
    }

    axios.post(`${this.state.url}/friends`, this.state.newFriend)
      .then(({data}) => this.setState({friends: data, newFriend: {name: '', age: '', email: ''}, updateFriend: false}))
      .catch(err => console.error(err));
  }

  updateFriend = (friend) => {
    this.setState({updateFriend: true, newFriend: {...this.state.newFriend, ...friend}})
  }

  deleteFriend = (id) => {
    axios.delete(`${this.state.url}/friends/${id}`)
      .then(({data}) => this.setState({friends: data}))
      .catch(err => console.error(err));
  }

  changeHandler = (ev) => {
    ev.preventDefault();
    this.setState({ newFriend: { ...this.state.newFriend, [ev.target.name]: ev.target.value}});
  }

  render() {
    if (!this.state.friends.length) {
      return <h1>Loading Friends...</h1>
    }
    return (
      <div className="App">
          <FriendForm 
            friend={this.state.newFriend}
            changeHandler={this.changeHandler}
            addNewFriend={this.addNewFriend}
            updateFriend={this.state.updateFriend}
          />
          <FriendList 
            friends={this.state.friends}
            updateFriend={this.updateFriend}
            deleteFriend={this.deleteFriend}
          />
      </div>
    );
  }
}

export default App;
