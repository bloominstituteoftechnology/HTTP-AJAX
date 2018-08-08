import React, {Component} from 'react';
import axios from 'axios';

class FriendList extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render(){
    return (
      <div>
        <ul>
          {this.state.friends.map(friend => <li key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>id: {friend.id}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p></li>)}
        </ul>

      </div>
    );
  }
}

export default FriendList;
