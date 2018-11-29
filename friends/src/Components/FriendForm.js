import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  width: 400px;
  margin: 20px auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const FormAddFriend = styled.form`
  display: flex;
  flex-direction: column;
`;

const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 10px;

  h2 {
    margin: 0;
  }
`;

const InputName = styled.input`
  margin-left: 10px;
  width: 100%;
  border-radius: 5px;
`;

const InputAge = styled.input`
  margin-left: 30px;
  width: 10%;
  border-radius: 5px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
  }
`;

const InputEmail = styled.input`
  margin-left: 10px;
  width: 100%;
  border-radius: 5px;
`;

const InputButton = styled.input`
  margin: 0 10px 10px;
  height: 50px;
  font-size: 32px;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgb(128, 0, 128);
  font-weight: 600;
  background: linear-gradient(to top, #89640b, #e0ac32);
  border-color: #e0ac32;
  color: white;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  outline: none;
  cursor: pointer;
  &:hover {
    outline: 0;
    background: radial-gradient(
      ellipse at top,
      rgb(255, 255, 255) 0%,
      rgb(229, 193, 0) 50%,
      rgb(245, 166, 35) 100%
    );
    transition: opacity 2s ease-in;
    color: rgb(251, 244, 209);
  }
`;

/***************************************************************************************************
 ********************************************** Methods ********************************************
 **************************************************************************************************/
const newFriend = (id, name, age, email) => {
  return {
    id,
    name,
    age,
    email
  };
};

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      email: ''
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.props.edit) {
      // let friendInfo = this.props.friends.find(
      //   friend => `${friend.id}` === this.props.match.params.id
      // );
      this.props.editFriend(this.props.match.params.id, this.state);
      this.props.history.push(
        `${this.props.urlLinks.friend}/${this.props.match.params.id}`
      );
    } else {
      this.props.addFriend(
        newFriend(
          this.props.friends[this.props.friends.length - 1].id + 1,
          this.state.name,
          this.state.age,
          this.state.email
        )
      );
    }
  };

  render() {
    return (
      <DivWrapper>
        <FormAddFriend onSubmit={e => this.submitHandler(e)}>
          <DivRow>
            <h2>Name:</h2>
            <InputName
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </DivRow>
          <DivRow>
            <h2>Age:</h2>
            <InputAge
              type='number'
              name='age'
              value={this.state.age}
              onChange={this.changeHandler}
            />
          </DivRow>
          <DivRow>
            <h2>Email:</h2>
            <InputEmail
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.changeHandler}
            />
          </DivRow>
          <InputButton
            type='submit'
            placeholder='addfriend'
            value={this.props.edit ? 'Save Info' : 'Add Friend'}
          />
        </FormAddFriend>
      </DivWrapper>
    );
  }
}

// FriendForm.propTypes = {
//   propertyName: PropTypes.string
// }

export default FriendForm;
