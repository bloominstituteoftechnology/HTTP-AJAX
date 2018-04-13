import React, { Component } from 'react';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Label } from 'reactstrap';
import axios from 'axios';

import './UpdateFriend.css';

class UpdateFriend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // friend: [],
            name: '',
            email: '',
            age: '',
        }
    }

    // componentDidMount() {
    // const id = this.props.match.params.id
    // axios.put(`http://localhost:5000/friends{id}`)
    //   .then((response) => {
    //     this.setState({ friend: response.data })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // }

    updateFriend = (event) => {
        event.preventDefault();
        const id  = this.props.match.params.id
        console.log(this.props.match.params)
        const updateFriend = {
              name: this.state.name,
              email: this.state.email,
              age: this.state.age,
            }
        axios.put(`http://localhost:5000/friends/${id}`, updateFriend)
        .then((res) => {
            console.log(res);
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value});
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value});
    }
    handleAgeChange = (event) => {
        this.setState({ age: event.target.value});
    }

  render() {
    //   console.log(this.state)
    //   console.log(this.props.friends.state)
    return (
      <div className='updateFriend'>
          <h1> Update Friend </h1>
            <Form className='form' onSubmit={this.updateFriend}>
                <Label for="Name">Name</Label>
                <Input type="text" name="name" id="Name" onChange={this.handleNameChange}  placeholder='Name'/>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="Email" onChange={this.handleEmailChange}  placeholder="Email" />
                <Label for="Age">Age</Label>
                <Input type="number" name="age" id="Age" onChange={this.handleAgeChange} placeholder="Age" />
                <Input className='submit' onChange={this.handleChange}  type="submit" value='Submit'  />
            </Form>
          <Link to={`/`} className='listLink'> <Button color="warning"> Friends List </Button> </Link>
          <Link to={`/friend`} className='listLink'> <Button color="danger"> Add Friend </Button> </Link>
      </div>
    );
  }
}

export default UpdateFriend;