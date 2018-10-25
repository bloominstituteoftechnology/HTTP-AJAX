import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import styled from 'styled-components';

const CenteredDiv = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
`;

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: ''
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchFriend(id);    
    }

    fetchFriend = id => {
        axios
            .get(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState(() => ({ friend: response.data }))
            })
            .catch(error => {
                console.error(error);
            });
    };

    render() {
        if (!this.state.friend) {
            return <CenteredDiv style={{margin: "200px"}}>Loading...</CenteredDiv>;
        }
    
        return (
            <CenteredDiv>
                <FriendCard key={this.state.friend.id} friend={this.state.friend} />
            </CenteredDiv>
        )
    }
}
