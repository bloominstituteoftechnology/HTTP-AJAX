import React, { Component } from 'react';
import {Row, Col, Table} from 'reactstrap';
import TableRow from '../auxiliar/TableRow';
import {Route} from 'react-router-dom';
import {FriendCard} from '../../components'

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    /** <Col > is fully responsive : try risizing your viewport */
    render() {
        const {friends} = this.props;
        // console.log(friends);
        return (
            <Row className="">
                <Route path="/:id-:name" render={ props => <FriendCard {...props} friends={friends} upDate={this.props.upDate} /> } />
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