import React, {Component} from "react";
import EditFriends from "../editFriends/EditFriends";
import axios from "axios";




class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    handleDelete = id => {
        this.props.handleDelete(id);
    }

    render(){
    return (
        <div>
            {this.props.friend.name} 
            {this.props.friend.age} 
            {this.props.friend.email} 
            <button onClick ={() => this.handleDelete(this.props.friend.id)}> 
                Delete
            </button>
        </div>
    )
}
}
export default Friends;