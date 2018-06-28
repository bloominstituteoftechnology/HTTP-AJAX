import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import styled from 'styled-components';
import FriendCard from './FriendCard';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <FriendCard friend={this.props.friend} />
        )
    }
}

export default Friend;
