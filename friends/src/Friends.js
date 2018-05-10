import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import NewFriend from './NewFriend'

export default class Friends extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friends: [] ,
        name: '',
        age: '',
        email: '',
      };
    }

    componentDidMount() {
        axios
          .get('http://localhost:5000/friends')
          .then(response => {
            this.setState({ friends: response.data });
          })
          .catch(error => {
            console.error('Server Error', error);
          });
    }

    onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }

    onSubmit = (e) => {
        const { name, age, email  } = this.state;
        axios
            .post('http://localhost:5000/friends', { "name":name, "age":age, "email":email })
            .then(response => {
                this.setState( { name, age, email : response.data } );
              })
              .catch(error => {
                console.error('Server Error', error);
            });     
    }
    
    render() {
        const newFriendFormData = new FormData();
        return (
            <div className="friend-list">
                {this.state.friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
                ))}
                <NewFriend onSubmit={this.onSubmit} onChange={this.onChange}/>
            </div>
        );
    }
}

function Friend({ friend }) {
    const { name, age, email } = friend;
    return (
      <div className="friend-card">
        <h2>{name}</h2>
          <div className="email">
            Email: <em>{email}</em>
          </div>
          <div className="age">
            Age: <strong>{age}</strong>
          </div>
      </div> 
    );
} 
