import React from 'react';
import axios from 'axios';
import './App.css';
import Friend from './Friend';
import Form from './Form';

class App extends React.Component {

  state = {
    friends: []
  }

  componentDidMount(){
    axios.get("http://localhost:5000/friends")
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(error => {
        console.error(error);
      })
  }

  addFriend = (name, age, email) => {
    let newData = { name, age, email, id: Date.now() }
    axios.post("http://localhost:5000/friends", newData)
      .then(response => {
        console.log(response);
        this.setState({friends: response.data});
      })
      .catch(err => {
        console.error(err);
      })
  }

  handleDelete = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`) 
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(err => {
        console.error(err)
      })
  }

  updateFriend = (name, age, email, id) => {
    let newData = {name, age, email};
    axios.put(`http://localhost:5000/friends/${id}`, newData )
      .then(response => {
        this.setState({friends: response.data});
      })
  }


  render() {
    console.log(this.state);
    return (
      <>
      <h1>Lambda Friends</h1>
      <Form addFriend={this.addFriend}/>
      <div className="friend-container">
        {this.state.friends.map(friend => {
          return (
            <Friend friend={friend} key={friend.id} handleDelete={this.handleDelete} updateFriend={this.updateFriend}/>
          )
        })}
      </div>
      </>
    );
  }
}

export default App;
