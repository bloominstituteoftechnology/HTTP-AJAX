import React from 'react';
// import axios from 'axios';

import Friend from './Friend';

// class FriendList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       friends: []
//     }
//   }

//   componentDidMount() {
//     axios
//       .get('http://localhost:5000/friends')
//       .then(res => {
//         this.setState({ friends: res.data });
//         console.log(res.data);
//       })
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//       <div>
//         <h1>Friend List</h1>
//         {this.state.friends.map(friend => <Friend key={friend.id} name={friend.name} age={friend.age} />)};
//       </div>
//     )
//   }
// }

const FriendList = props => {
  return (
    <h1>Friend List</h1>
    {this.state.friends.map()} // unreachable code
  )
}

export default FriendList;