import React, {
  Component
} from 'react';
import axios from 'axios';


class FriendInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }  

  componentDidMount() { 
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        console.log('response', response.data)
        this.setState({ friends: response.data });
      })
  }

  render() { 
    console.log('this.state', this.state)
    return (
      <ul>
        {this.state.friends.map(friend => (
          <li>{friend.name}</li>
        ))}
      </ul>
    )
  }
}

export default FriendInput;