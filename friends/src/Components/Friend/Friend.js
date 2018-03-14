import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            age: '',
            email: '', 
        }

        this.deleteFriend = this.deleteFriend.bind(this);
    }

    componentDidMount() {
        this.setState({
            id: this.props.friend.id,
            name: this.props.friend.name,
            age: this.props.friend.age,
            email: this.props.friend.email
        });
    }

    deleteFriend() {
        const id = this.state.id;
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/friends/${id}`,
            headers: { 'Content-Type': 'application/json' },
          });
    }

    render() {
        return (                           
            <div className="Friend-Card">
                <h2>{this.state.name}</h2>
                <h4>Age: {this.state.age}</h4>
                <h4>Email: {this.state.email}</h4>
                <Link to={`friends/${this.state.id}/update`}>Update</Link>
                <button onClick={this.deleteFriend}>Delete</button>
            </div>
        );
    }
}


export default Friend;