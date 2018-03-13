import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button, ButtonGroup, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default class DisplayFriend extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      
      newName: '',
      newAge: '',
      newEmail: ''
      
    }

    
    
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios.get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
        // console.log(response);
      })
      .catch(err => console.log(err))
  }
  updateName = (event) => {
    this.setState({ newName: event.target.value })
    console.log(this.state);
  }
  updateAge = (event) => {
    
    this.setState({ newAge: Number(event.target.value) })
    console.log(this.state);
  }
  updateEmail = (event) => {
    this.setState({ newEmail: event.target.value })
    console.log(this.state);
  }


  addFriend = (event) => {
    
    event.preventDefault();  // NOT WORKING!!! WHY NOT!!?!?!?!?!?!?!?!
    console.log(this.state.friends);
    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    }
    
    axios.post("http://localhost:5000/friends", newFriend)
    .then(response => {
      this.setState({
        newName: '',
        newAge: '',
        newEmail: '',
      })
      this.getData();
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

    
    console.log('submitted');

    

    // axios({
    //   method: 'post',
    //   url: "http://localhost:5000/friends",
    //   data: newFriend
    // });

    
  }


  render() {
    return(
      

          this.state.friends.map(friend => {
        return(
          <div key={friend.name}>
            <Card inverse color="primary">
                <CardTitle>{friend.name}</CardTitle>
                <CardText>{`${friend.name} is ${friend.age} years old.`}</CardText>
                <CardText>{`${friend.name}'s email address is ${friend.email}.`}</CardText>
                <Row>
                  <Col>
                    <ButtonGroup className="text-center">
                      <Button color="warning">Update Contact</Button>
                      <Button color="danger">Delete contact</Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Card>
            </div>
          )
        })
            
      
    )
  }
}