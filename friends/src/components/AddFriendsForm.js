import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledForm = styled.form`
  margin: 1rem auto;
  background: blue;
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;

  & > input {
    width: 90%;
    border-radius: 35px;
    border: none;
    padding: 0.75rem;
    margin-bottom: 0.5rem;

    &:nth-child(3) {
      margin-bottom: 1.5rem;
    }
  }
  & input[type="submit"] {
    text-transform: uppercase;
    display: inline-block;
    width: auto;
    align-self: flex-start;
    margin-left: 1rem;
    max-width: 47%;
    font-size: 0.6rem;
    cursor: pointer;
    position: relative;
    box-shadow: 0 4px rgb(255, 255, 255);
    outline: none;
    background: blue;
    color: white;
    font-weight: bold;
    border: 1px solid white;
    letter-spacing: 1.8px;

    &:hover {
      top: 2px;
      box-shadow: 0 2px rgb(255, 255, 255);
    }

    &:active {
      box-shadow: 0 0 rgb(255, 255, 255);
      top: 4px;
    }
  }
`;

class AddFriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: null,
      name: "",
      age: 0,
      email: ""
    };
  }

  componentDidMount = () => {
    const friend = this.props.match.params.id;
    if (this.props.editFriend) {
      this.fetchFriend(friend);
      // console.log(this.props);
    }
  };

  fetchFriend = id => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        const friend = res.data.filter(
          friend => friend.id.toString() === this.props.match.params.id
        )[0];

        this.setState(() => ({
          friend: friend,
          name: friend.name,
          age: friend.age,
          email: friend.email
        }));
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.age !== 0 &&
      this.state.email !== ""
    ) {
      if (this.props.editFriend) {
        this.props.editFriend(this.state, this.props.match.params.id);
      } else {
        this.props.addFriend(this.state);
      }
    } else return null;
  };

  render() {
    // console.log(this.props);

    return (
      <div>
        <h2>{this.props.editFriend ? "Edit Friend" : "Add Friend"}</h2>
        <StyledForm onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Enter Friends Name..."
            value={
              this.state.name.length > 0 ? this.state.name : this.props.name
            }
          />
          <input
            type="number"
            name="age"
            onChange={this.handleChange}
            placeholder="Enter Friends Age..."
            value={this.state.age !== 0 ? this.state.age : this.props.age}
          />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="Enter Friends Email..."
            value={
              this.state.email.length > 0 ? this.state.email : this.props.email
            }
          />
          <input
            type="submit"
            value={this.props.editFriend ? "Edit Friend" : "Add Friend"}
          />
        </StyledForm>
      </div>
    );
  }
}

export default AddFriendsForm;
