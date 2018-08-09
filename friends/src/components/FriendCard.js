import React from 'react';
import FriendForm from './FriendForm.js';
import Friend from './Friend.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

class FriendCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      friend: null,
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount= () => {
    const id = this.props.match.params.id;
    this.fetchFriend(id);
    console.log(id);
  }

  fetchFriend = idnum => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        const friend = response.data[parseInt(idnum) -1];
        this.setState(() => ({ friend }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  addValueHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  changeFriendHandler = (e) => {
    const changedfriend = {
      id: this.state.friend.id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios.put(`http://localhost:5000/friends/${changedfriend.id}`, changedfriend)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
  }


  render () {
    if (!this.state.friend) {
      return (
        <div>Server Error!</div>
      )
    }
    return (
      <div>
        <FriendForm submitFriend={this.changeFriendHandler} newFriendName={this.state.name} valueAdd={this.addValueHandler} newFriendAge={this.state.age} newFriendEmail={this.state.email} />
        <Friend person={this.state.friend} />
        <Link to='/'>
          <button onClick={this.props.reSetState}>Back to Home</button>
        </Link>
      </div>
    )
  }
}

export default FriendCard;
