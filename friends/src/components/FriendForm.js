import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getFriends } from '../actions';
import '../css/FriendForm.css';

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Age: '',
      Email: '',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.addNewFriend = this.addNewFriend.bind(this);
  }


  handleChangeName(event) {
    this.setState({
      Name: event.target.value
    })
  }

  handleChangeAge(event) {
    this.setState({
      Age: event.target.value
    })
  }

  handleChangeEmail(event) {
    this.setState({
      Email: event.target.value
    })
  }

  addNewFriend() {
    const newFriend = {
      name: this.state.Name,
      age: this.state.Age,
      email: this.state.Email
    };
    const promise = axios.post('http://localhost:5000/new-friend', newFriend);
    this.props.getFriends(promise);
  }

  render() {
    return (
      <div className="friendForm">
        <form>
          Name:<input
            placeholder="YOU have a friend?????"
            value={this.state.Name}
            onChange={this.handleChangeName}
          />
          Age:<input
            placeholder="What's their age?"
            value={this.state.Age}
            onChange={this.handleChangeAge}
          />
          Email:<input
            placeholder="What's their e-mail?"
            value={this.state.Email}
            onChange={this.handleChangeEmail}
          />
          <button type="submit"
                  onClick={this.addNewFriend}>Submit your so-called "friends" Info</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postFriend: state.postFriend
  };
};

export default connect(mapStateToProps, { getFriends })(FriendForm);
