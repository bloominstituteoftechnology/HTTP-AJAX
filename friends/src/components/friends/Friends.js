import React, {Component} from "react";
import EditFriends from "../editFriends/EditFriends";
import axios from "axios";

class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render(){
    return (
        <div>
            {this.props.friend.name} 
            {this.props.friend.age} 
            {this.props.friend.email} 
        </div>
    )
}
}
export default Friends;