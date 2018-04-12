import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardTitle, CardText, Container, Row, Col, Button } from 'reactstrap';
import './Friend.css';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.getFriend(id);
    }

    getFriend = id => {
        axios.get(`http://localhost:5000/friends`)
            .then(res => {
                this.setState({ friend: res.data[id - 1]})
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteFriend = friendId => {
        axios
            .delete(`http://localhost:5000/friends/${friendId}`)
            .then(res => {
                window.location = 'http://localhost:3000/friends';
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        if(!this.state.friend) {
            return <div>
                <Container className="friendContainer">
                  <Row className="friendsRow">
                    <Col sm="12">
                      <Card body>
                        <CardTitle>No Friend found!</CardTitle>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>;
        }
        const { id, name, age, email } = this.state.friend;
        return <div>
            <Container className="friendContainer">
              <Row className="friendsRow">
                <Col sm="12">
                  <Card body>
                    <CardTitle>Name: {name}</CardTitle>
                    <CardText>ID: {id}</CardText>
                    <CardText>Age: {age}</CardText>
                    <CardText>Email: {email}</CardText>
                    <div className="editFriend">
                      <Button color="warning" className="editFriendButton">
                        Update
                      </Button>
                      <Button color="danger" className="editFriendButton" onClick={() => this.deleteFriend(id)}>
                        Delete
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>;
    }
}

export default Friend;