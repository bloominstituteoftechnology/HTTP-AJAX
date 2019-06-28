import React from 'react';
import FriendEditForm from './friendEditForm';
import axios from 'axios';

class FriendCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            friend: this.props.friend
        }
    }

    deleteFriend = () => {
        this.props.deleteItem(this.state.friend)
    }

    render(){
        const {name, age, email} = this.state.friend;
        return <div>
            <h4>Card for {name} </h4>
            <p>{age} years old, {email} </p>
            <FriendEditForm updateFriend={this.props.updateFriend} friend={this.props.friend} />
            <button onClick={this.deleteFriend}>Delete</button>
        </div>
    }
}

export default FriendCard