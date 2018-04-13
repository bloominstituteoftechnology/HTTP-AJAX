import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap'

import FriendCard from './FriendCard';

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: undefined,
        }
    }

    componentDidMount = () => {
        this.getFriends();
    }

    getFriends = () => {
        let id = this.props.match.params.id;
        axios
            .get(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState(() => ({ friend: response.data }));
            })
            .catch(error => {
                console.error(error);
            })
    }

    render() {
        if(this.state.friend === undefined) {
            return <div className="mt-5 mb-5">Loading friend...</div>;
        }
        else if(this.state.friend === null) {
            return <div>Loading friend...</div>
        }
        else if (this.state.friend !== null && this.state.friend !== undefined && this.state.friend) {
            return (
                <Container className="mt-5 mb-5">
                    <h1>Single Friend Display</h1>
                    <FriendCard 
                        friend={this.state.friend}
                        getFriends={this.getFriends}
                    />
                </Container>
            )
        } else return <div className="mt-5 mb-5">No friend with this id exists</div>
    }
}