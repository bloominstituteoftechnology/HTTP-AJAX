import React from "react";
import styled from "styled-components";

import axios from "axios";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: fixed;
`;

const StyledInput = styled.input`
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  border: 2px solid black;
  focus: none;
  &:hover = {
    background-color: black;
    color: white;
  }
`;

class FormList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        id: "",
        name: "",
        age: "",
        email: ""
      }
    };
  }

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    this.setState(prevState => ({
      friend: { ...prevState.friend, [ev.target.name]: value }
    }));
  };

  handleSubmit = ev => {
    ev.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.friend)
      .then(res => {
        this.props.updateFriends(res.data);
        // this.props.history.push()
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Add A Friend:</h2>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledInput
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="Friend's Name"
            value={this.state.friend.name}
          />
          <StyledInput
            type="text"
            name="age"
            onChange={this.changeHandler}
            placeholder="Friend's Age"
            value={this.state.friend.age}
          />
          <StyledInput
            type="text"
            name="email"
            onChange={this.changeHandler}
            placeholder="Friend's Email"
            value={this.state.friend.email}
          />
          <StyledButton type="submit">Add Friend To List</StyledButton>
        </StyledForm>
      </div>
    );
  }
}

export default FormList;
