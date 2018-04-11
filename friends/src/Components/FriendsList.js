import React, { Component } from 'react';
import axios from 'axios'

export default class FriendsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friends: [],
        name: '',
        age: '',
        email: '',
      };
    }
    componentDidMount() {
        axios
          .get(`http://localhost:5000/friends`)
          .then(response => {
            this.setState({ friends: response.data });
          })
          .catch((error) => {
            console.log(`There was an error retrieving Friend: ${error}`);
          });
      }

    render() {

        return (
            <div className="mainDiv">
                {this.state.friends.map(friend => (
                    <div className='nameCard'>
                    <div key={friend.id} classname="friend"></div>
                     <div Classname="name">Name: {friend.name}</div>
                    <div Classname="age">Age: {friend.age}</div>
                    <div Classname="email">{friend.email}</div>
                </div>
        ))}
            </div>

)
}}
