import React, {Component} from "react";
import EditFriends from "../editFriends/EditFriends";
import axios from "axios";




class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditForm: false,
            name: "",
            age: "",
            email: "",
        }
    }
    handleDelete = id => {
        this.props.handleDelete(id);
    }

    toggleForm =() => {
        this.setState({showEditForm : !this.state.showEditForm});
    }

    editHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitFriendEdit = () => {
        const editFriend = {name : this.state.name, age : Number(this.state.age), email : this.state.email};
        axios
        .put(
            `http://localhost:5000/friends/${this.props.friend.id}`, editFriend
        )
        .then(response => {
            console.log(response);
            this.props.handleSetData(response.data);
        })
        .catch(err=> {
        console.log(err)
        })
    }



    render(){
    return (
        <div>
            {this.props.friend.name} 
            {this.props.friend.age} 
            {this.props.friend.email} 

            {this.state.showEditForm ? (
            <EditFriends
            friend = {this.props.friend}
            editHandler = {this.editHandler}
            submitFriendEdit = {this.submitFriendEdit}
            />
            ) : null}

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