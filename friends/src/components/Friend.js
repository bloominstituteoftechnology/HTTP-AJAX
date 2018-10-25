// import React from "react";
// import { Route } from "react-router-dom";

// import FriendCard from "./FriendCard";

// export default class Friend extends React.Component {
//   // delete = () => {
//   //   this.props.deleteFriend(this.props.friend);
//   // };
//   render() {
    
//     return (
//       <>
//         {/* <Switch>
//           <Route exact path="/friends">
//             <div style={{padding: '20px 0 40px 0'}}>
//               <div onClick={this.delete} style={{cursor: 'pointer'}}>X</div>
//               <Link to={`/friends/${this.props.friend.id}`} style={{textDecoration: 'none', color: 'black'}}>
//                 <h1>{this.props.friend.name}</h1>
//                 <div>{`Age: ${this.props.friend.age}`}</div>
//                 <div>{`Email: ${this.props.friend.email}`}</div>
//               </Link>
//             </div>
//           </Route> */}
//           <Route
//             path={`/friends/:id`}
//             render={props => (
//               <FriendCard
//                 {...props}
//                 friend={this.props.friend}
//                 friends={this.props.friends}
//                 updateFriend={this.props.updateFriend}
//                 deleteFriend={this.props.deleteFriend}
//               />
//             )}
//           />
//         {/* </Switch> */}
//       </>
//     );
//   }
// }
