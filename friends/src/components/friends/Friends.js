import React, {Component} from "react";
import EditFriends from "../editFriends/EditFriends";
import axios from "axios";




class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditForm: false,
            editedFriend: ""
        }
    }
    handleDelete = id => {
        this.props.handleDelete(id);
    }

    toggleForm =() => {
        this.setState({showEditForm: !this.state.showEditForm})
    }

    editHandler = e => {
        this.setState({editedFriend: e.target.value})
    }



    render(){
    return (
        <div>
            {this.props.friend.name} 
            {this.props.friend.age} 
            {this.props.friend.email} 
            <EditFriends
            friend = {this.props.friend}
            editHandler = {this.editHandler}
            />
            <button onClick ={this.toggleForm}>
                Edit
            </button>
            <button onClick ={() => this.handleDelete(this.props.friend.id)}> 
                Delete
            </button>
        </div>
    )
}
}
export default Friends;