import React, { Component } from 'react';
import axios from 'axios';

import { FriendManager } from './AddFriend';

class FriendsList extends Component{
    constructor(){
    super();
    this.state = {
        friends: []
    }
    }


render() {
    return (
        <div>
            <div className="friend__header">Friends List</div>
            <ul className="friend__cards">
                {this.state.friends.map((friend, newfriend) => {
                    return (
                        <div>
                            <div>
                            <li key={friend.id} className="friend__list">
                                <div className="friend__name">{friend.name}</div>
                                <div className="friend__age">{friend.age}</div>
                                <div className="friend__email">{friend.email}</div>
                            </li>
                            </div>
                             {/* <div key={newfriend.id} className="friend__newlist">
                                <FriendManager />
                            </div>  */}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
 }



 componentDidMount() {
    //  const friends = null;
     axios.get('http://localhost:5000/friends')
     .then(response => {
         this.setState({ friends: response.data });
     })
     .catch(error => {
         console.log(`${error}`);
     })
 }
}

export { FriendsList };