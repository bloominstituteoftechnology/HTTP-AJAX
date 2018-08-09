import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from 'react-router-dom';

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
//       age: this.sate.age,
//       email: this.state.email
//     };
//     axios.post(`url/${id}`, updatedFriend)
//     .then(response => {
//       this.setState({ name: "", age: "", email: "" });
//       this.props.update(response.data);
//     })
//     .catch((err) => console.log(err))
//   };

deleteHandler = event => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${this.props.match.params.id}`)
          .then(res=>{
            this.setState({name: '', age: '', email: '',});
            this.props.update(res.data);
            this.props.history.push('/');
          })
          .catch(err => console.log(err));
  }
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
        <button onClick={this.deleteHandler}>Delete This Friend</button>
        <Link to="/"><div className="btn btn-return">Return</div></Link>
      </Form>
    );
  }
}

export default AddFriend;
