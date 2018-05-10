import React, {
  Component
} from 'react';
import axios from 'axios';
//import FriendInput from 'FriendInput';


class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }  

  componentDidMount() { 
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        //console.log('response', response)
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() { 
    console.log('Friend List State', this.state.friends)
    return (
      <div>
        {this.state.friends.map(friend => (
          <div>{friend.name} {friend.age} {friend.email}</div>
        ))}
      </div>
    )
  }
}

export default FriendList;