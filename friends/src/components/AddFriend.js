import React from "react";
import styled from "styled-components";
import axios from "axios";

const url = "http://localhost:5000/friends"

const Form = styled.form`
    padding: 50px 0 0 0;
`;

const Input = styled.input`
    height: 24px;
    width: 150px;
    font-size: 14px;
    color: black;
    margin: 10px
`

class AddFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios.post(url, newFriend)
    .then(response => {
      this.setState({ name: "", age: "", email: "" });
      this.props.update(response.data);
    })
    .catch((err) => console.log(err))
  };
    
//   editHandler = (id) => {
//     const updatedFriend = {
//       name: this.state.name,
//       age: parseInt(this.state.age, 10),
//       email: this.state.email
//     };
//     axios.post(`url/${id}`, updatedFriend)
//     .then(response => {
//       this.setState({ name: "", age: "", email: "" });
//       this.props.update(response.data);
//     })
//     .catch((err) => console.log(err))
//   };

// example delete function with delete request
  // deleteFriend = (id) => {
  //   axios.delete(`http://localhost:5000/friends/${id}`)
  //   .then(response => {
  //     this.setState({
  //       friends: response.data
  //     })
  //   })
  //   .catch((err) => console.log(err))
  // }

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          placeholder="Enter Name"
          onChange={this.inputHandler}
        />
        <Input
          type="text"
          name="age"
          id="age"
          value={this.state.age}
          placeholder="Enter Age"
          onChange={this.inputHandler}
        />
        <Input
          type="text"
          id="email"
          name="email"
          value={this.state.email}
          placeholder="Enter E-Mail"
          onChange={this.inputHandler}
        />
        <Input type="submit" />
        
      </Form>
    );
  }
}

export default AddFriend;
