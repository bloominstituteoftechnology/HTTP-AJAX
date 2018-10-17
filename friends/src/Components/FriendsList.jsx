import React from 'react';
import Friend from './Friend';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { friends } = this.props;
    return ( 
      <div className="FriendsContainer">
        {friends.map(friend => {
          return <Friend {...friend} />
        })}

      </div>
    );
  }
}
 
export default FriendsList;