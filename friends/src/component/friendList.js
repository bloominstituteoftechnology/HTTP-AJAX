import React from 'react';
import axios from 'axios';
import FriendCard from './friendCard';

class FriendList extends React.Component {
    constructor(props){
        super(props);
    }

    

    

    render(){
        return <div>
            <h3>FriendList</h3>
            {
                this.props.friends.length > 0 ? this.props.friends.map( friend => (
                    <FriendCard friend={friend} key={friend.name} deleteItem={this.props.deleteItem} updateFriend={this.props.updateFriend} />
                ))
                : 
                <h1>Loading</h1>
            }
        </div>
    }


}

export default FriendList;