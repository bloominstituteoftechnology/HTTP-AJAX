import React, {Component} from 'react';
import axios from 'axios';

import './Friend.css';

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state={
      showUpdatedFriend: false,
      name: '',
      age: '',
      email: ''
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]:  event.target.value });
  }
  
  showUpdatedFriend = () => {
    this.setState({showUpdatedFriend: !this.state.showUpdatedFriend })
  }

  updateHandler = (friendId) => {
    const friend = {};
    if (this.state.name !== "" ){
      friend.name = this.state.name;
    }
    if (this.state.name !== "" ){
      friend.age = this.state.age;
    }
    if (this.state.name !== "" ){
      friend.age = this.state.age;
    }
  axios
    .put(`http://localhost:5000/friends/${friendId})`, friend) 
    .then (response => {
      this.setState({ showUpdatedFriend: false, name: '', age: '', email: '' });
      this.setState({friends: response.data})
    }) 
    .catch(err => {
      console.log(err);
    });
};

  deleteHandler = (friendId) => {
    axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then (response => { 
        this.setState({friends: response.data})
       })
      .catch(err => console.log(err));
  }
  
  updateHandler = (friendId) => {
    const friend = {};
    if (this.state.name !== "" ){
      friend.name = this.state.name;
    }
    if (this.state.age !== "" ){
      friend.age = this.state.age;
    }
    if (this.state.email !== "" ){
      friend.age = this.state.age;
    }
  axios
    .put(`http://localhost:5000/friends/${friendId})`, friend) 
    .then (response => {
      this.setState({ showUpdatedFriend: false, name: '', age: '', email: '' });
      this.setState({friends: response.data})
    }) 
    .catch(err => {
      console.log(err);
    });
};

  render(){
    const { friend } = this.props;
  return (
      <div key={friend.id} className = "friend-info">
        <h2>{friend.name}</h2>
        <h3>Age: {friend.age}</h3>
        <h3>Email: {friend.email}</h3>
      <div className = "button-container">
      <button onClick = {this.showUpdatedFriend}>Edit</button>

    {this.state.showUpdatedFriend ? (
      <div>
        {/* important note use name = 'age' since target.name=target.value, 'name' is standard syntax */}
        <input 
        value = {this.state.name} 
        onChange={this.state.inputHandler} 
        type = 'text' 
        placeholder='name' 
        name = 'name' 
        />
        
        <input 
        value = {this.state.age} 
        onChange={this.state.inputHandler} 
        type = 'text' 
        placeholder='age' 
        name = 'age' 
        />
        <input 
        value = {this.state.email} 
        onChange={this.state.inputHandler} 
        type = 'text' 
        placeholder='email' 
        name = 'email' 
        />
        <button 
        onClick = {() => this.state.updateFriend(friend.id)}>
        Save Changes
        </button>
        </div>
    ) : null}

      <button onClick = {() => this.state.deleteFriend(friend.id)} > Remove </button>
      </div>
    </div>


  )
}
}

export default Friend