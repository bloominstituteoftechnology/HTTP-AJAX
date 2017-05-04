import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, getFriends } from '../actions';
import { Modal } from '../components';

class AddFriend extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {};
  }

  resetState() {
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      },
      errors: {}
    });
  }

  componentWillMount() {
    this.resetState();
  }

  handleChange(e) {
    const { friend } = this.state;
    friend[e.target.name] = e.target.value;
    this.setState({
      friend
    });
  }

  handleSubmit(e) {
    const { errors, friend } = this.validate(this.state.friend);
    e.preventDefault();

    if (Object.keys(errors).length) return;

    this.props.addFriend(friend, () => {
      this.resetState();
      this.props.getFriends();
      window.location.replace('#close');
    });
  };

  validate(friend) {
    const errors = {};
    Object.keys(friend).forEach(prop => {
      const isVowel = ['a','e','i','o','u'].indexOf(prop[0].toLowerCase()) !== -1;
      if (!friend[prop]) errors[prop] = `Please enter a${isVowel ? 'n' : ''} ${prop}`;
    });
    
    this.setState({
      errors
    });

    return { errors, friend };
  }

  renderField(label, name) {
    return (
      <div>
        <label>{label}</label>
        <input name={name} value={this.state.friend[name]} onChange={this.handleChange} />
        <div>{ this.state.errors && this.state.errors[name] ? this.state.errors[name] : '' }</div>
      </div>
    );
  }

  render() {
    return (
      <Modal>
      <div className="AddFriend">
        <div>
          { this.renderField('Name', 'name') }
          { this.renderField('Age', 'age') }
          { this.renderField('Email', 'email') }
        </div>
        <div>{ this.state.error ? this.state.error : '' }</div>
        <button onClick={ this.handleSubmit }>Add</button>
      </div>
      </Modal>
    );
  }
}

export default connect(null, { addFriend, getFriends })(AddFriend);