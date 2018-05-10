import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Input, Label } from 'reactstrap';




export default class FriendsList extends Component {
    constructor(){
      super()
      this.state = {
        friends: [],
        name: '',
        age: '',
        email: ''
      }
    }
  
    componentDidMount(){
      this.getUsers()
    }
  
    getUsers = () => {
      axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data, name: '', age: '', email: ''})
        })
        .catch(err => console.log(err))
    } 

    postUsers = (event) => {
        const {name, age, email} = this.state
        axios.post('http://localhost:5000/friends', {name, age, email})
        .then(response =>{
            return this.setState({friends: response.data});
        })
        .catch(error =>{
            return `There's an error!`;
        })
        
    }

    handleChange = event => {
       { this.setState({ [event.target.name]: event.target.value })};
      }; 
    

    render() {
        return(
            <div>
            <div>
                <h3>Join my Slack Channel!</h3>
                    <Form inline onChange={this.handleChange}>
                        <FormGroup className="formgroup">
                        <Label for="Name" className="mr-sm-2">Name  </Label>
                        <Input type="text" name="name" id="name" placeholder="Name" />
                        </FormGroup>
                        <FormGroup className="formgroup">
                        <Label for="Age" className="mr-sm-2">Age   </Label>
                        <Input type="number" name="age" id="age" placeholder="it's just a number!" />
                        </FormGroup>
                        <FormGroup className="formgroup">
                        <Label for="Email" className="mr-sm-2">Email</Label>
                        <Input type = "email" name="email" id="email" placeholder="something@idk.cool" />
                        </FormGroup>
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
const Example = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  