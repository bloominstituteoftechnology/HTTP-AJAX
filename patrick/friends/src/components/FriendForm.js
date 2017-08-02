import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFriend } from '../actions';
import '../css/FriendForm.css';

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
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

  render() {
    return (
      <div className="friendForm">
        <form>
          Name:<input
            placeholder='Your "friends" name?'
            value={this.state.Name}
            onChange={this.handleChangeName}
          />
          Age:<input
            placeholder="Their age?"
            value={this.state.Age}
            onChange={this.handleChangeAge}
          />
          Email:<input
            placeholder="Their e-mail?"
            value={this.state.Email}
            onChange={this.handleChangeEmail}
          />
          <button>Submit Your "friend"s info</button>
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

export default connect(mapStateToProps, { postFriend })(FriendForm);
