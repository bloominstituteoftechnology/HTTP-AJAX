import React, { Component } from 'react';
import axios from 'axios'; 
import Friend from '../src/Friend';

class FriendsList extends Component {
    
constructor(props) {
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

// NameAdd = event => {
//     event.preventDefault();
//     const friends = this.state.friends.slice();
//     friends.push.({id: Date.now() ,name: this.state.name, age: this.state.age, email: this.state.email});
//     this.setState({friend:''});

// }




  render() {
    return (
      <div className="FriendList">
      {this.state.friends.map(friend => (
          <Friend key={friend.name} friend={friend} />
      ))}
      </div>
    );
  }
}

export default FriendsList;