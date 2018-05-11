import React from "react";
import './Friend.css';
import { Link } from 'react-router-dom';
import axios from "axios";

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            email: props.email,
            age: props.age,
        }
    }
        
    handleUpdateFriend = (e) => {
        e.preventDefault();
        const {name, age, email} =this.state;
        axios.put('http://localhost:5000/friends', {name, age, email})
            .then(response => console.log(response))
            .catch(error => console.log(error))
        this.setState({
            name: name,
            age: age,
            email: email
        })
    }

    render() {
        return (
            <div className="friend-card">
                <h3>{this.state.name}</h3>
                <p>{`Age: ${this.state.age}`}</p>
                <p>{`Email: ${this.state.email}`}</p>
                <Link to={`/friend/${this.props.id}`}><button>Update</button></Link>
                <button className="delete-button" onSubmit={this.handleDeleteFriend}>Delete</button>
            </div>
             );
    }
}

export default Friend;