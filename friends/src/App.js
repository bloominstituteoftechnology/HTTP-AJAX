import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList'
import AddFriendForm from './components/AddFriendForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newFriend: {
        name: '',
        age: '',
        email: '',
      }
    }
  }

  addFriend = (e) => {
    alert('what');
     e.preventDefault();
    const newFriend = this.state.newFriend;
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        console.log(response);
        newFriend.name = '';
        newFriend.age = '';
        newFriend.email = '';
        this.setState({ data: response.data, newFriend})
      })
      .catch(err => {
        console.log(err);
      })
  }

  nameHandler = (e) => {
    const newFriend = this.state.newFriend;
    newFriend.name = e.target.value;
    this.setState ({ newFriend });
  }

  ageHandler = (e) => {
    const newFriend = this.state.newFriend;
    newFriend.age = e.target.value;
    this.setState ({ newFriend });
  }

  emailHandler = (e) => {
    const newFriend = this.state.newFriend;
    newFriend.email = e.target.value;
    this.setState ({ newFriend });
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response);
        this.setState( {data: response.data })})
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log('GET RESPONSE: ', response);
        this.setState({ data: response.data })
      })
      .catch(err => {
        console.log(err);
      });
    
  }
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendsList
          friends={this.state.data} 
          deleteFriend={this.deleteFriend}
        />
        <AddFriendForm
          addFriend={this.addFriend}
          nameHandler={this.nameHandler}
          ageHandler={this.ageHandler}
          emailHandler={this.emailHandler}
        />
      </div>
    );
  }
}

export default App;
