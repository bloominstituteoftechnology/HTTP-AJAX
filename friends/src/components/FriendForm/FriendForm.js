import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Friends from '../Friends/Friends';

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newName: '',
      newAge: '',
      newEmail: '',
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error =>
        console.error(`Friends request produced an error: ${error}`)
      );
  }

  handleChangeName = event => {
    this.setState({ newName: event.target.value });
  };

  handleChangeAge = event => {
    this.setState({ newAge: event.target.value });
  };

  handleChangeEmail = event => {
    this.setState({ newEmail: event.target.value });
    // const email = this.state.newFriend.email;
    // this.setState({ email: event.target.value });

  };

  handleSubmit = event => {
    event.preventDefault();
    if( this.state.newName === '' || this.state.newAge === '' || this.state.newEmail === '') return alert('All fields required');
    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    };

    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(res => {
        this.setState({
          friends: res.data,
          // newFriend: {
          //   name: '',
          //   age: '',
          //   email: '',
          // },
          newName: '',
          newAge: '',
          newEmail: '',
        })
      })
      .catch(error => console.error(error));
  };

  handleDelete = event => {
    console.log("Im in delete");
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => console.error(error))
  } 

  handleUpdate = event => {
    event.preventDefault();
    // if( this.state.newName === '' || this.state.newAge === '' || this.state.newEmail === '') return alert('All fields required');
    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    };

    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`http://localhost:5000/friends/${id}`, newFriend)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data,
          // newFriend: {
          //   name: '',
          //   age: '',
          //   email: '',
          // },
          newName: '',
          newAge: '',
          newEmail: '',
        })
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div>
        <Friends friends={this.state.friends} />

        <Form className="FriendForm">
          <h2>Friend Form:</h2>

          <FormGroup>
            <Label for="Name">Name: </Label>
            <Input className="Input" type="text" name="name" id="name" placeholder="Add name" autoComplete="name" onChange={this.handleChangeName} onSubmit={this.handleSubmit} value={this.state.newName} required />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age: </Label>
            <Input className="Input" type="number" name="age" id="age" placeholder="Add age" onChange={this.handleChangeAge} onSubmit={this.handleSubmit} value={this.state.newAge} required />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email: </Label>
            <Input className="Input" type="email" name="email" id="email" placeholder="Add email" autoComplete="email" onChange={this.handleChangeEmail} onSubmit={this.handleSubmit} value={this.state.newEmail} required />
          </FormGroup>
          <Button color="primary" type="submit" className="btn-add" onClick={this.handleSubmit}>
            Add Friend
          </Button>
          <p className="InputWarning">All fields are required for input</p>
        </Form>
      </div>
    );
  }
}
export default FriendForm;