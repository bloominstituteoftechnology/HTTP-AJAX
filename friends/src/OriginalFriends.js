import React, { Component } from 'react';

class OriginalFriends extends Component {
   constructor(props) {
      super(props);
      this.state = {};
      //console.log(this.props);
   }

   render() {
      return (
         <div>
            <h1>Friends:</h1>
            <ul className="friends">
               {this.props.originalState.friends.map(friend => {
                  return (
                     <li key={friend.id} className="friend">
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                        <button onClick={() => this.props.delete(friend.id)}>
                           Delete
                        </button>
                     </li>
                  );
               })}
            </ul>
         </div>
      );
   }
}

export default OriginalFriends;
