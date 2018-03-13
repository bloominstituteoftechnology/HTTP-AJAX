import React, {Component} from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FriendsList extends Component {
    constructor() {
        super();

        this.state = {
            friends: []
        };
    };
    

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() => ({friends: response.data}));      
        })
        .catch(error => {
            console.error('Server Error:', error);
        });
    }   


    render() {
        return(
        <div>
            
        {this.state.friends.map(friend => {
            return (
                <div className='card-box'>
                <Card body>
                    <CardTitle>{friend.name}</CardTitle>
                    <CardText>
                        {`Age: ${friend.age}`}<br/>
                        {`E-mail: ${friend.email}`}
                    </CardText>
                    <Button>Go somewhere</Button>
                </Card>
                </div>
            );
        })}
    
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Age</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">E-mail</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        </Form>
            
        </div>
    )
    }
}

export default FriendsList;