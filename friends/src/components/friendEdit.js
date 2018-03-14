
import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

class FriendEdit extends Component {
    constructor() {
        super()
        this.state = {
           friend: {},
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState({ friend: response.data });
            });
    }

    Update() {
        // console.log('here')
    }

    Delete() {
        console.log('there')
    }
    
    Edit() {
        this.Update();
    }

    render() {
       
        return (
            <div className="List__Friend">
                <Link to="/">Friends List</Link>
                <div className="Friend__Name">{this.state.friend.name}</div>
                <div className="Friend__Age">{`Age: ${this.state.friend.age}`}</div>
                <div className="Friend__Email">{`Email: ${this.state.friend.email}`}</div>
                <Link to={`/friends/${this.state.friend.id}/edit`}><button>Edit</button></Link>
                <Link to={`/friends/${this.state.friend.id}/delete`}><button>delete</button></Link>   
            </div>
        );
    }
}

export default FriendEdit