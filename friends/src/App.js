import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './FriendsList';
import FriendForm from './FriendForm'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        friends: [],
        
    };
  }
  
  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() => ({ friends: response.data }));
        })
        .catch(error => {
          console.error('Ummm...what...!?!', error);
        });
  }
  
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  };
  
  addFriend = event => {
    const { name, age, email } = this.state;
    event.preventDefault();
    axios.post('http://localhost:5000/friends', {name, age, email})
    .then(response => {
      this.setState({ friends: response.data, name: "", age: "", email: "" });
      window.location.reload();
    })
    .catch(err => console.log("Umm...that's a problem", err));
  };
  
  deleteFriend = (id) => {
    return () => {
      axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({friends: response.data})
      })
      .catch(err => console.log("You can't get rid of me that easily!"))
    }

  }
  
  updateHandler = event => {
    const { name, age, email } = this.state;
    const id = this.props.friend.id
    event.preventDefault();
    this.updateFriendHandler(id, name, age, email)
  }
  
  updateFriendHandler = (id, name, age, email) => {
    axios.put(`http://localhost:5000/friends/${id}`, {
      friend: {
        name: name,
        age: age,
        email: email
      }
    })
    .then(response => {
      this.setState({ friends: response.data});
      window.location.reload();
    })
    .catch(err => console.log("Umm...that's a problem", err));
  }
  
  render() {
    return (
      <div className="App">
        <FriendForm 
          addFriend={this.addFriend}
          inputName={this.state.name}
          inputAge={this.state.age}
          inputEmail={this.state.email}
          inputHandler={this.inputHandler}/>
        <FriendsList 
        friends={this.state.friends}
        deleteFriend={this.deleteFriend}
        updateHandler={this.updateHandler}
        inputHandler={this.inputHandler}
          inputName={this.state.name}
          inputAge={this.state.age}
          inputEmail={this.state.email} />
      </div>  
    );
  }
}

export default App;
