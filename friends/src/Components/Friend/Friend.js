import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardTitle, CardText, Container, Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './Friend.css';

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: null,
      showUpdateFriendForm: false,
      name: '',
      age: '',
      email: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getFriend(id);
  }

  getFriend = id => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        this.setState({ friend: res.data[id - 1] });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateFriend = friendId => {
    const friend = {};
    if (this.state.name !== '') {
      friend.name = this.state.name;
    }
    if (this.state.age !== '') {
      friend.age = Number(this.state.age);
    }
    if (this.state.email !== '') {
      friend.email = this.state.email;
    }
    axios
      .put(`http://localhost:5000/friends/${friendId}`, friend)
      .then(res => {
        this.setState({
          showUpdateFriendForm: false,
          name: '',
          age: '',
          email: '',
        });
        this.props.getFriends();
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = friendId => {
    axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then(res => {
        window.location = 'http://localhost:3000/friends';
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleEditFriend = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showUpdateFriendForm = () => {
    this.setState({ showUpdateFriendForm: !this.state.showUpdateFriendForm });
  };

  render() {
    if (!this.state.friend) {
      return (
        <div>
          <Container className="friendContainer">
            <Row className="friendsRow">
              <Col sm="12">
                <Card body>
                  <CardTitle>No Friend found!</CardTitle>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    const { id, name, age, email } = this.state.friend;
    return (
      <div>
        <Container className="friendContainer">
          <Row className="friendsRow">
            <Col sm="12">
              <Card body>
                <CardTitle>Name: {name}</CardTitle>
                <CardText>ID: {id}</CardText>
                <CardText>Age: {age}</CardText>
                <CardText>Email: {email}</CardText>
                <div className="editFriend">
                  <Button
                    color="warning"
                    className="editFriendButton"
                    onClick={this.showUpdateFriendForm}
                  >
                    Update
                  </Button>
                  <Button
                    color="danger"
                    className="editFriendButton"
                    onClick={() => this.deleteFriend(id)}
                  >
                    Delete
                  </Button>
                </div>
                {this.state.showUpdateFriendForm ? (
                  <div>
                    <input
                      type="text"
                      onChange={this.handleEditFriend}
                      placeholder="name"
                      name="name"
                      value={this.state.name}
                    />
                    <input
                      type="text"
                      onChange={this.handleEditFriend}
                      placeholder="age"
                      name="age"
                      value={this.state.age}
                    />
                    <input
                      type="text"
                      onChange={this.handleEditFriend}
                      placeholder="email"
                      name="email"
                      value={this.state.email}
                    />
                    <button onClick={() => this.updateFriend(id)}>
                      Save Friend
                    </button>
                  </div>
                ) : null}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Friend.propTypes = {
  id: PropTypes.number
}

export default Friend;