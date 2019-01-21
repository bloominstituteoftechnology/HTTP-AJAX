import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({friends: response.data});
      })
      .catch(err => {
        console.log(err);
      });
}

render(){
  return(
    <h1>These are my friends:</h1>
  )
}

}

export default FriendsList;