import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import UpdateFriend from "./UpdateFriend";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export default class FriendCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchFriend(id);
  }

  fetchFriend = id => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        const found = response.data.find(friend => `${friend.id}` === id);
        this.setState(() => ({ userInfo: found }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  inputChange = e => {
    e.preventDefault();
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  numberInputChange = e => {
    e.preventDefault();
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: parseInt(e.target.value)
      }
    });
  };

  submitUpdate = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.userInfo);
  };

  render() {
    const friendProfile = this.state.userInfo;
    if (!friendProfile) {
      return <div />;
    } else {
      return (
        <div style={{ marginTop: "60px" }}>
          <Card>
            <CardBody>
              <CardTitle>{this.state.userInfo.name}</CardTitle>
              <CardSubtitle>{`Age: ${this.state.userInfo.age}`}</CardSubtitle>
              <CardSubtitle>{`Email: ${
                this.state.userInfo.email
              }`}</CardSubtitle>
              <CardText>
                {this.state.userInfo.description}
              </CardText>
              <UpdateFriend
                userInfo={this.state.userInfo}
                inputChange={this.inputChange}
                numberInputChange={this.numberInputChange}
                submitUpdate={this.submitUpdate}
              />
            </CardBody>
          </Card>
        </div>
      );
    }
  }
}
