import React from 'react';
//import ReactDOM from 'react-dom';
import Friend from './Friend';
import './FriendsList.css';


class FriendList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friends: props.friends
        };
    }

    render() {
        return (
          <div className="friends-list">
                    { this.props.friends.map(friend => {
                        return(
                    <Friend key={friend.id}  friend={friend} />
                  )
              })
          }
          
          </div>
        )};

};

export default FriendList;

