import React from "react";
import './Friend.css';
import { Route, Link } from 'react-router-dom';
import axios from "axios";
import FriendUpdate from "./FriendUpdate.js";

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            email: props.email,
            age: props.age,
        }
    }
        
    handleUpdateFriend() {
            let form = document.getElementById('updateFriend');
            const formData = new FormData(form);
            axios.put('http://localhost:5000/friends', formData)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.setState({name: formData.name})
            this.setState({name: formData.age})
            this.setState({name: formData.email})
        }

    render() {
        return (
            <div className="friend-card">
                <h3>{this.state.name}</h3>
                <p>{`Age: ${this.state.age}`}</p>
                <p>{`Email: ${this.state.email}`}</p>
                <Link to={`/friend/${this.props.id}`}><button onSubmit={this.handleUpdateFriend}>Update</button></Link>
                <Route path="/friend/:id" component={FriendUpdate}/>
            </div>
             );
    }
}

export default Friend;