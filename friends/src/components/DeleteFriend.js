import React from 'react';
import {Link} from 'react-router-dom';

class DeleteFriend extends React.Component{
    deleteFriend = ()=>{
        this.props.deleteFriend(this.props.id);
    }
    render(){
        return (
            <Link to="/" onClick={this.deleteFriend}>Delete</Link>
        )
    }
}

export default DeleteFriend;