import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import EditFriendForm from './FriendCard';
import FriendCard from '../../src/components/FriendCard';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <h1 className="friends-title">These are my friends:</h1>
        <div className="friends-list">
          {this.props.friends.map(friend => (
            <FriendCard 
              name={friend.name} 
              age={friend.age} 
              email={friend.email} 
              key={friend.id}
              id={friend.id}
              deleteFriend={this.props.deleteFriend}
              editFriend={this.props.editFriend}
              currentEdit={this.props.currentEdit}
            />
          ))}
        </div>
          
      </div>
    )
  }

}

export default FriendsList;