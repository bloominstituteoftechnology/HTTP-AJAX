import React from 'react';
import Friend from './Friend';
// import { Link } from 'react-router-dom';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { friends, deleteFriend, modifyFriendsList } = this.props;
    return ( 
      <div className="FriendsContainer">
        {friends.map(friend => {
          return (
            <Friend 
              key={friend.id} 
              deleteFriend={deleteFriend} 
              modifyFriendsList={modifyFriendsList}
              {...friend}
            />
          )
        })}
      </div>
    );
  }
}
      // <Link to={'/friends/' + friend.id}>
      // </Link>
      
export default FriendsList;