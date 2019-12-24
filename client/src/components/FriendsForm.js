import React from 'react';
import styled from 'styled-components';

const TertiaryHeading = styled.h3`
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 1.2rem;
`;

const FormGroup = styled.div`
  padding: 0.5rem 0;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.8rem 0.5rem;
  border: none;
  border-radius: 2px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;

  &::placeholder {
    color: #ababab;
    text-transform: uppercase;
  }

  &:focus,
  &:active {
    outline: none;
    border-bottom-color: #00acc1;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  }
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  font-family: inherit;
  color: #fff;
  background-color: #424242;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 1rem;
`;

class FriendsForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(this.state);
          this.props.history && this.props.history.push('/friends');
          this.setState({
            name: '',
            age: '',
            email: ''
          });
        }}
      >
        <TertiaryHeading>{this.props.title}</TertiaryHeading>
        <FormGroup>
          <StyledInput
            onChange={this.handleChange}
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
          />
        </FormGroup>
        <FormGroup>
          <StyledInput
            onChange={this.handleChange}
            type="number"
            placeholder="age"
            name="age"
            value={this.state.age}
          />
        </FormGroup>
        <FormGroup>
          <StyledInput
            onChange={this.handleChange}
            type="email"
            placeholder="email"
            name="email"
            value={this.state.email}
          />
        </FormGroup>
        <ActionButton>&#10003; Submit</ActionButton>
      </form>
    );
  }
}

export default FriendsForm;
