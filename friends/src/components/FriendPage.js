import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import FriendCard from './FriendCard';
import FormInput from './FormInput';

export default class FriendPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        friend: null,
        name: "",
        age: "",
        email: ""
    };
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({
          friend: response.data.find( friend => `${friend.id}` === this.props.match.params.id )
        }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editFriend =(id) => {
    console.log(id);
    axios.put(`http://localhost:5000/friends/${id}`, {
      name: this.state.name,
      age: this.state.age,
      email:this.state.email
  })
    .catch(error => {
      console.log(error);
    });
  }

  deleteFriend =(id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/friends/${id}`)
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    if (!this.state.friend) {
      return <div>Loading information...</div>;
    }

    return (
      <div>
        <Link to={`/`}><button>Home</button></Link>
        <FriendCard friend={this.state.friend} />
        <FormInput
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          handleChange={this.nameInputHandler}
        />
        <button onClick={() => this.editFriend(this.state.friend.id)}>Edit Friend</button>
        <button onClick={() => this.deleteFriend(this.state.friend.id)}>Delete Friend</button>
      </div>
    );
  }
}
