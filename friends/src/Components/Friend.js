import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Friend.css';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            age: '',
            email: '',
        }
    }

    componentDidMount() {
        this.setState({
            id: this.props.friend.id,
            name: this.props.friend.name,
            age: this.props.friend.age,
            email: this.props.friend.email
        });
    }

    render() {
        return (
            <div className="Friend-Card">
                <h2>{this.state.name}</h2>
                <h4>Age: {this.state.age}</h4>
                <h4>Email: {this.state.email}</h4>
            </div>
        );
    }
}

export default Friend;