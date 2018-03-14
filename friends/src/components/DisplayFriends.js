import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button, ButtonGroup, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default class DisplayFriend extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
    
    }
   this.deleteFriend = this.deleteFriend.bind(this);
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

  deleteFriend(event) {
    
    console.log(event.target.id)
    let remove = {};
    console.log(this.state.friends, 'state friends')
    this.state.friends.forEach(friend => {
      console.log(friend.id)
      console.log(event.target.id)
      if (friend.id === Number(event.target.id)) remove = friend;
    });
    
    console.log(remove);
    axios.delete(`http://localhost:5000/friends/${remove.id}`)
    .then(response => {
      this.setState({ friends: response.data });
      // console.log(response);
    })
    .catch(err => console.log(err))
  }

  
  


  render() {
    return(
      

          this.state.friends.map(friend => {
        return(
          <div key={friend.id}>
            <Card inverse color="primary">
                <CardTitle>{friend.name}</CardTitle>
                <CardText>{`${friend.name} is ${friend.age} years old.`}</CardText>
                <CardText>{`${friend.name}'s email address is ${friend.email}.`}</CardText>
                <Row>
                  <Col>
                    <ButtonGroup className="text-center">
                      <Button color="warning">Update Contact</Button>
                      <Button id={friend.id} onClick={this.deleteFriend} color="danger">Delete contact</Button>
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