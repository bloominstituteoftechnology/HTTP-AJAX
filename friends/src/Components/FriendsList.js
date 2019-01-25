import React from 'react';
// import axios from 'axios';
import { Route } from 'react-router-dom';

import Friend from './Friend';

class FriendsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friends:[]
        }
    }

    // <Route exact path="/friends/:id/update" render={props=> <FriendForm {...props} /> } />
    render() {
        return ( 
            <div className="list-container">
                {this.props.friends.map(friend=><Friend friend={friend} key={friend.id} deleteFriend={this.props.deleteFriend}/>)}
            </div> 
        );
    }
    
}
 
export default FriendsList;