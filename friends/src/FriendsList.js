import React from 'react';
import {Link, Route} from 'react-router-dom';
import FriendPage from './FriendPage';


class FriendsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friends: []
        }
    }
    render() {
        console.log(this.props.friends)
        console.log(this.props); 
        const friends = this.props.friends
        return(
            <div>
                <div>
                    <h1>HTTP -AJAX Friends</h1>
                    <ul>
                        {friends.map(friend => <Link key ={friend.id} to = {`/${friend.name}`}><li key ={friend.id}>{friend.name}  {friend.age}  {friend.email}</li></Link>)}
                    </ul>
                    <div><Link to ='/create-friend'>Click Here to Add New Friend</Link></div>
                </div>
                <Route path = '/:name' render={(props) => <FriendPage {...props} /> }/>
                
            </div>
         );
    }
}

export default FriendsList