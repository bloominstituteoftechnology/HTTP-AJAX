import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import styled from 'styled-components';

const FriendWrapper = styled.div`
    border: 2px solid purple;
    height: 50px;
    background: grey;
`;

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null,
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchFriend(id);
    }

    fetchFriend = id => {
        axios
            .get(`http://localhost:5000/friedns/${id}`)
            .then(response => {
                this.setState(() => ({ friend: response.data }));
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <FriendWrapper>
                <FriendCard key={this.state.friend.id} friend={this.state.friend} />
            </FriendWrapper> 
        );
    }
};