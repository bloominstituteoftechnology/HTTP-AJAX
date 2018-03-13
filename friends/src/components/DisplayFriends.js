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