import React from 'react';
import axios from 'axios';

import Friend from './Friend';

class FriendsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friends:[]
        }
    }
    // console.log(props)
    // const { friendsList } = props;
    // console.log(friendsList)

    

    render() {
        return ( 
            <div className="list-container">
                {this.props.friends.map(friend=><Friend friend={friend} key={friend.id} />)}
            </div> 
        );
    }
    
}
 
export default FriendsList;