import React from 'react';
import axios from 'axios';
// import styled from 'styled-components';

// const FriendCard = styled.div`
//   color: green;
//   background: dodgerblue;
// `

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
    <div>
      <h1 className="friends-title">These are my friends:</h1>
      <div className="friends-list">
        {this.state.friends.map(friend => (
          <div className="friend-card">
            <h3 className="friend-name">Name: {friend.name}</h3>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>
          </div>
          ))}
      </div>
        
    </div>
  )
}

}

export default FriendsList;