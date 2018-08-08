import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import styled from "styled-components";

const FriendListWrapper = styled.div`
    border: 1px solid red;
    height: 350px;
`;

export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
        };
    };

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        return (
            <FriendListWrapper>
            {this.state.friends.map(f => (
                <FriendCard key={f.id} friend={f}/>
            ))}
            </FriendListWrapper>
        );
    }

}
