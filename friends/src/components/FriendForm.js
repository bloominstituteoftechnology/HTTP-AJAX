import React from 'react';
import styled from 'styled-components';
//import {Link} from 'react-router-dom';

export const StyledFriendForm = styled.form`
  max-width: 60%;
  border: 1px solid black;
  border-radius: 4px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  input {
    padding: 5px;
  }
`;

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || '',
      age: '',
      email: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const newFriend = {...this.state, id: Date.now()};
    this.setState({ name: '', age: '', email: ''})
    const func = this.props.edit ? this.props.updateFriend : this.props.addFriend
    func(newFriend);
  };

  render() {
    return (
      <StyledFriendForm onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </StyledFriendForm>
    );
  }
}

export default FriendForm;
