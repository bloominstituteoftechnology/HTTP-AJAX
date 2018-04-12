import React from 'react';
import axios from 'axios';
import {Button, Card, CardText,
    CardTitle, Col, Row} from 'reactstrap'
import './Friends.css'
class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    removeFriend = (e) => {
        console.log(e.target.id);
        axios.delete(`http://localhost:5000/friends/${e.target.id}`)
            .then((response) => {
                console.log(`Successfully deleted. Response: ${response}`)
                this.props.getFriends();
            })
            .catch((error) => {
                console.log(`Error deleting friend: ${error}`)
            })
    };

    render() {
        return (
            <div className='Friend'>
                <Card key={this.props.friend.id} className='Friend'>
                    <CardTitle>
                        {this.props.friend.name}
                    </CardTitle>
                    <CardText>
                        <Row>
                            <Col>
                                Age: {this.props.friend.age}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Email: {this.props.friend.email}
                            </Col>
                        </Row>


                    </CardText>
                    <Button color='danger' onClick={this.removeFriend} id={this.props.friend.id}>Delete</Button>
                </Card>
            </div>


        );
    }
}

export default Friend;