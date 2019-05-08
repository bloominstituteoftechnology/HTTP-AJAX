import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() { 
    return (
    <div>
      <h1>friend</h1>
    </div>

      );
  }
}
 
export default FriendsList;