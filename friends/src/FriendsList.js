import React from 'react';
import {Link} from 'react-router-dom';


class FriendsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friends: []
        }
    }
    render() {
        console.log(this.props.friends)
        const friends = this.props.friends
        return(
            
            <div>
                <h1>HTTP -AJAX Friends</h1>
                <ul>
                    {friends.map(friend => <li key ={friend.id}>{friend.name}  {friend.age}  {friend.email}</li>)}
                </ul>
                <div><Link to ='/create-friend'>Click Here to Add New Friend</Link></div>
            </div>
         );
    }
}

export default FriendsList