import React, { Component } from 'react';
import {Row, Col, Table} from 'reactstrap';

class FriendCard extends Component {
    constructor(props) {
        super(props),
        this.state = {}
    }
    
    render() {
        return (
            <Row>
                Hello From FriendCard.
            </Row>
        );
    }
}

export default FriendCard;