import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend';
import FormInput from './FormInput';

 export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      loading: true,
      name: "",
      age: null,
      email: ""
    };
  }

   componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({
          friends: response.data,
          loading: false
        }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  nameInputHandler = e => {
    this.setState({ name: e.target.value });
  };
  ageInputHandler = e => {
    this.setState({ age: e.target.value });
  };
  emailInputHandler = e => {
    this.setState({ email: e.target.value });
  };

  addNewFriend = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email:this.state.email
    })
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

   render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    } else if (!this.state.loading) {
      return (
        <div>
        {this.state.friends.map((friend, i) => (
          <Friend friend={friend} key={i}/>
        ))}
          <FormInput 
          addFriend={this.addNewFriend}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          addName={this.nameInputHandler}
          addAge={this.ageInputHandler}
          addEmail={this.emailInputHandler}
        />
        </div>
    )}}
  
  }
 
