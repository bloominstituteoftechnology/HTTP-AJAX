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
      .post("http://localhost:5000/friends", this.state.item)
      .then(res => {
        this.props.updateItems(res.data);
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
        </StyledForm>
      </div>
    );
  }
}

export default FormList;
