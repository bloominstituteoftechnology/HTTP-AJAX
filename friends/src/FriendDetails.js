import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Input, Label } from 'reactstrap';

    const URL = 'http://localhost:5000/friends';



export default class FriendDetails extends Component {
    constructor(props){
      super(props)
      this.state = {
        friends: [{}],
      }
    }
  
    componentWillMount(){
        console.log('CWM', this.state);
     axios.get(URL)
        .then(res => {
            return this.setState({ friends: res.data})
        })
        .catch(err => console.log(err))
    };
    

    postUsers = () => {
        const {name, age, email} = this.state
        axios.post(URL, {name, age, email})
        .then(response =>{
            return this.setState({friends: response.data});
        })
        .catch(err =>{
            console.log(err);
        })
        
    }

    handleChange = event => {
       this.setState({ [event.target.name]: event.target.value });
      }; 
    

    render() {
        console.log(this.state.friends);
        return(
            <div>
            <div>
                <h3>Join my Slack Channel!</h3>
                    <Form inline onChange={this.handleChange}>
                        <Label for="Name" className="mr-sm-2">Name  </Label>
                        <Input type="text" name="name" id="name" placeholder="Name" />
                        <Label for="Age" className="mr-sm-2">Age   </Label>
                        <Input type="number" name="age" id="age" placeholder="it's just a number!" />
                        <Label for="Email" className="mr-sm-2">Email</Label>
                        <Input type = "email" name="email" id="email" placeholder="something@idk.cool" />
                        <Button className = "button-info" onClick = {this.postUsers}>Submit Now!</Button>
                    </Form>
                   <br/>
                   <br/>
    
                
                <div className = "friends">
                    {this.state.friends.map(friend => {
                        return (
                            <div>
                            <Card key = {friend.id} className = "friend">
                                <CardBody>
                                    <CardTitle>Name - {friend.name}</CardTitle>
                                    <CardSubtitle>Age - {friend.age}</CardSubtitle>
                                    <CardText>Email - {friend.email}</CardText>
                                    <br/>
                                </CardBody>
                            </Card>
                            
                            </div>
                        )
                    
                    })}
                    
                </div>
            </div>
            </div>

            
        )
        
    }
    
}
  