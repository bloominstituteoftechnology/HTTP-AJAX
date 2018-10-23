import React, { Component } from 'react'
import axios from 'axios'

export default class FriendsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends: []
        };
    }
      
    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
              console.error('Server Error', error);
            });
    }
      
    render() {
        return (
            <div>
                {this.state.friends.map(friend => (
                    <FriendDetails key={friend.id} friend={friend} />
                ))}
            </div>
        );
    }
}

function FriendDetails ({ friend }) {
    const { name, age, email } = friend;
    return (
      <div className="friend-info">
        <div className="friend-name">
          Name: {name}
        </div>
        <div className="friend-age">
          Age: {age}
        </div>
        <div className="friend-email">
          Email: {email}        
        </div>
      </div>
    );
  }