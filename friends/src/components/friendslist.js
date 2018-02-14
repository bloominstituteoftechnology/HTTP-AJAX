import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: ''
  };

  render() {
  
    return (
      <div>
        <div className="friend-title"><h1>Lambda Friends</h1></div>


          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.handleName} onDelete={this.handleDelete} />
            </label><label>
              Age:
              <input type="text" value={this.state.age} onChange={this.handleAge} onDelete={this.handleDelete}/>
            </label>
            <label>
              Email:
              <input type="text" value={this.state.email} onChange={this.handleEmail} onDelete={this.handleDelete}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
      
        <ul>{this.state.friends.map(friend => {
          return (
            <li key={friend.id} className="friend">
              <div className="friend-name">{friend.name}</div>
              <div className="friend-age">{`Age: ${friend.age}`}</div>
              <div className="friend-email">{`Email: ${friend.email}`}</div>
              <button onClick={this.onDelete.bind(this, friend)}>Delete</button>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
 
  onDelete = (friend) => {
    this.props.deleteFriends(friend);
  }

  handleName = (event) => {
    event.preventDefault();
    this.setState({
        name: event.target.value });
  }

  handleAge = (event) => {
    event.preventDefault();
    this.setState({
        age: event.target.value });
  }

  handleEmail = (event) => {
    event.preventDefault();
    this.setState({
        email: event.target.value });
  }

handleSubmit = (event) => {
  // this.setState({value: event.target.value});
  event.preventDefault();
  axios.post('http://localhost:5000/friends', {
    name: this.state.name,
    age: this.state.age,
    email: this.state.email
  })
  .then(response => {
    this.setState({ friends: response.data});
  })
  .catch(error => {
    console.log(error);
  });
}

  // handleChange(event) {
  //   console.log(this.state.value);
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log('there was error', error);
      })

  }
}

export default FriendsList;