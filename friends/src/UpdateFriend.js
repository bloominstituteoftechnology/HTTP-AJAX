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
            friend: [],
            name: '',
            email: '',
            age: '',
        }
    }

    
    componentDidMount() {
    const id = this.props.match.params.id
    console.log(id)
    axios.get('http://localhost:5000/friends')
      .then((response) => {
        this.setState({ friend: response.data[1] })
      })
      .catch((error) => {
        console.log(error)
      })
  }



  render() {
      console.log(this.state)
      console.log(this.props)
      console.log(this.props.match.params.id)
    return (
      <div className='updateFriend'>
          <h1> Update Friend </h1>
            <Form className='form' onSubmit={this.UpdateFriend}>
                <Label for="Name">Name</Label>
                <Input type="text" name="name" id="Name" placeholder={this.props.name} />
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="Email" placeholder="Email" />
                <Label for="Age">Age</Label>
                <Input type="number" name="age" id="Age" placeholder="Age" />
                <Input className='submit' type="submit" value='Submit'  />
            </Form>
          <Link to={`/`} className='listLink'> <Button color="warning"> Friends List </Button> </Link>
          <Link to={`/friend`} className='listLink'> <Button color="danger"> Add Friend </Button> </Link>
      </div>
    );
  }
}

export default UpdateFriend;