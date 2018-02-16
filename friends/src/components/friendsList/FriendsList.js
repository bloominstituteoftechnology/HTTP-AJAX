import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
  state={
    editing: false
    // friends: []    
  }

  render(){
    const friend = this.props.friend;
      return (
        <ul>
            {this.state.friends.map((friend) => {
              return(
              <li key={friend.id}>
                  {friend.name}
              </li>
            );
            })}
        </ul>
      );
            
  // return (
  //   // <div>
  //   //     <div className="friend-title">Lambda Friends</div>
  //   //     {this.state.loading && <div>Loading Friends...</div>}

  //   //     {!this.state.loading && (
  //   //     <ul className="friend-grid">
  //   //     {this.state.friends.map(friend => {
  //   //     return (
  //   //         <li key={friend.id} className="friend">
  //   //         <div className="friend-name">{friend.name}</div>
  //   //         <div className="friend-age">{`Age: ${friend.age}`}</div>
  //   //         <div className="friend-email">{`Email: ${friend.email}`}</div>
  //   //         </li>
  //   //       );
  //   //       })}
  //   //     </ul>
  //   //   )} 
  //   // </div>
  // );
}
toggleEditing = () => {
  this.setState(prevState => {
    return {
      
    }
  })
}
componentDidMount() {
	this.setState({ loading: true });
	axios
	.get('http://localhost:5000/friends')
	.then(response => {
	this.setState({ friends: response.data, loading: false});
    })
	.catch(error => {
	this.SetState({loading: false});
	console.log('there was an error', error);
});
}
}

export default FriendsList;
// http://localhost:5000/friends 6000 is reserved don't use change to 5000