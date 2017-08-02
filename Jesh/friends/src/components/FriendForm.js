import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFriend } from '../actions';

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

  addNewFriend(event) {
    event.preventDefault();
    const newFriend = {
      name: this.state.Name,
      age: this.state.Age,
      email: this.state.Email
    };
    this.props.dispatch(postFriend(newFriend));
  }

  render() {
    return (
      <form>
        Name:<input 
          placeholder="Name"
          value={this.state.Name}
          onChange={this.handleChangeName}
        />
        Age:<input 
          placeholder="Age"
          value={this.state.Age}
          onChange={this.handleChangeAge}
        />
        Email:<input 
          placeholder="Email"
          value={this.state.Email}
          onChange={this.handleChangeEmail}
        />
        <button type="submit" onClick={this.addNewFriend}>Submit Friend Request</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        postFriend: state.postFriend
    };
};

export default connect(mapStateToProps, { postFriend })(FriendForm);  