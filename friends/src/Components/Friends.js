import React, {Component} from "react";
import UpdateFriends from "./updateFriends";
import axios from "axios"

class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: "",
            updatedForm: false,
        }
    }
    handleDelete = id => {
        this.props.handleDelete(id);
    }



    toggleForm =() => {
        this.setState({updatedForm : !this.state.updatedForm});
    }

    updateHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitUpdate = () => {
        const updateFriend = {name : this.state.name, age : Number(this.state.age), email : this.state.email};
        axios
        .put(
            `http://localhost:5000/friends/${this.props.friend.id}`, updateFriend
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
    
                {this.state.updatedForm ? (
                <UpdateFriends
                friend = {this.props.friend}
                updateHandler = {this.updateHandler}
                submitUpdate= {this.submitUpdate}
                />
                ) : null}
    
                <button onClick ={this.toggleForm}>
                    Update
                </button>
    
                <button onClick ={() => this.handleDelete(this.props.friend.id)}> 
                    Delete
                </button>
    
            </div>
        )
    }
    }
    export default Friends;