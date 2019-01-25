import React from 'react';
// import axios from 'axios';
import { Route } from 'react-router-dom';

import Friend from './Friend';
import FriendForm from './FriendForm/FriendForm';

class FriendsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friends:[]
        }
    }

    render() {
        return ( 
            <div className="list-container">
                {this.props.friends.map(friend=>{
                    return <div key={friend.id}>
                        <Friend friend={friend} deleteFriend={this.props.deleteFriend}/>
                        {/* Is the pattern below an anti-pattern? */}
                        <Route exact path={`/friends/${friend.id}/update`} render={props=> <FriendForm {...props} submitHandler={this.props.editFriend} /> } />
                    </div> 
                })}
            </div> 
        );
    }
    
}
 
export default FriendsList;