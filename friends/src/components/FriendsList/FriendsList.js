import React, { Component } from 'react';
import {Row, Col, Table} from 'reactstrap';
import axios from 'axios';
import TableRow from '../auxiliar/TableRow';

class FriendsList extends Component {
    /** <Col > is fully responsive : try risizing your viewport */
    render() {
        const {friends} = this.props;
        // console.log(friends);
        return (
            <Row className="">
                <Col sm="12" md={{size: 8, offset:2}} >
                {/* Hello from FriendsList. */}
                <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {friends.map(
                        (friend, i) => <TableRow key={friend.id} {...friend} />
                    )}
                </tbody>
                </Table>
                </Col>
            </Row>
        );
    }
}

export default FriendsList;