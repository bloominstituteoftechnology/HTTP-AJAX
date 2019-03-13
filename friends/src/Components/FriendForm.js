import React from "react";
import styled from "styled-components";

const Form = styled.form`
  border: 1px solid #efefef;
  width: 70%;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;

  > input {
    padding: 1rem;
    width: 75%;
    margin: 0 auto;
    margin-bottom: 1.2rem;
  }

  > button {
    padding: 1.2rem;
    width: 40%;
    margin: 0 auto;
  }
`;
const FormHeader = styled.h2`
  margin-bottom: 1.2rem;
`;

class FriendForm extends React.Component {
  state = {
    friend: this.props.activeFriend || {
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidUpdate(preProps) {
    if (
      this.props.activeFriend &&
      preProps.activeFriend !== this.props.activeFriend
    ) {
      this.setState({
        friend: this.props.activeFriend
      });
    }
  }

  handleChange = event => {
    event.persist(); // Need this because a cb function is used when setting state

    let value = event.target.value;

    if (event.target.name === "age") {
      value = parseInt(value);
    }

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [event.target.name]: value
      }
    }));
  };

  handleSubmit = event => {
    if (this.props.activeFriend) {
      this.props.updateFriend(event, this.state.friend);
    } else {
      this.props.addFriend(event, this.state.friend);
    }

    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormHeader>{`${
          this.props.activeFriend ? "Update" : "Add New"
        } Friend Form`}</FormHeader>
        <input
          type="text"
          name="name"
          value={this.state.friend.name}
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="age"
          value={this.state.friend.age}
          placeholder="Age"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          value={this.state.friend.email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <button>{`${
          this.props.activeFriend ? "Update" : "Add"
        } Friend`}</button>
      </Form>
    );
  }
}

export default FriendForm;
