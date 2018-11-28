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

  & > input {
    width: 80%;
    border-radius: 5px;
    border: none;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  & input[type="submit"] {
    text-transform: uppercase;
    display: inline-block;
    width: auto;
    align-self: flex-start;
    margin-left: 1rem;
    max-width: 40%;
    font-size: 0.6rem;
  }
`;

export default class AddFriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsData: [...props.friendsData],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.friendsData.length !== this.props.friendsData.length) {
      axios
        .get("http://localhost:5000/friends/")
        .then(res => {
          // console.log(res.data);
          this.setState({
            friendsData: res.data
          });
        })
        .catch(err => console.log(err));
    }
    return null;
  };

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // addFriend = e => {
  //   e.preventDefault();
  //   if (
  //     this.state.name !== "" &&
  //     this.state.age !== "" &&
  //     this.state.email !== ""
  //   ) {
  //     // axios({
  //     //   method: "post",
  //     //   url: "http://localhost:5000/friends/",
  //     //   data: {
  //     //     name: this.state.name,
  //     //     age: this.state.age,
  //     //     email: this.state.email
  //     //   }
  //     // });
  //     // this.setState(prevState => ({
  //     //   friendsData: [
  //     //     ...prevState.friendsData,
  //     //     {
  //     //       name: this.state.name,
  //     //       age: this.state.age,
  //     //       email: this.state.email
  //     //     }
  //     //   ],
  //     //   name: "",
  //     //   age: "",
  //     //   email: ""
  //     // }));
  //     // window.location.reload();
  //     axios
  //       .post("http://localhost:5000/friends/", {
  //         name: this.state.name,
  //         age: this.state.age,
  //         email: this.state.email
  //       })
  //       .then(function(response) {
  //         console.log(response);
  //       })
  //       .catch(function(err) {
  //         console.log(err);
  //       });
  //     this.setState(prevState => ({
  //       friendsData: [
  //         ...prevState.friendsData,
  //         {
  //           name: this.state.name,
  //           age: this.state.age,
  //           email: this.state.email
  //         }
  //       ],
  //       name: "",
  //       age: "",
  //       email: ""
  //     }));
  //   } else return;
  // };

  render() {
    return (
      <StyledForm onSubmit={this.props.addFriend}>
        <input
          type="text"
          name="name"
          onChange={this.props.handleChange}
          placeholder="Enter Friends Name..."
          value={this.props.name}
        />
        <input
          type="text"
          name="age"
          onChange={this.props.handleChange}
          placeholder="Enter Friends Age..."
          value={this.props.age}
        />
        <input
          type="text"
          name="email"
          onChange={this.props.handleChange}
          placeholder="Enter Friends Email..."
          value={this.props.email}
        />
        <input type="submit" name="submit" />
      </StyledForm>
    );
  }
}
