import React, { Component } from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form,Input, Label } from 'reactstrap';
import axios from 'axios';

class FriendForm extends Component{
    constructor(props){
        super(props);
    }

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
    
    deleteUser =(id) =>{
        axios.delete(URL+"/"+id)
          .then(res =>{
              return this.setState({friends: res.data});
          })
    }

    handleChange = event => {
       this.setState({ [event.target.name]: event.target.value });
      };

    render(){
        return(
            <Form inline onChange={this.handleChange}>
                <Label 
                    for="Name" 
                    className="mr-sm-2">
                    Name  
                    </Label>
                <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name" />
                <Label 
                    for="Age" 
                    className="mr-sm-2">
                    Age   
                    </Label>
                <Input 
                    type="number" 
                    name="age" 
                    id="age" 
                    placeholder="it's just a number!" />
                <Label 
                    for="Email" 
                    className="mr-sm-2">
                    Email
                    </Label>
                <Input 
                    type = "email" 
                    name="email" 
                    id="email" 
                    placeholder="something@idk.cool" />
                <Button 
                    className = "button-info" 
                    onClick = {this.postUsers}>
                    Submit Now!
                    </Button>
            </Form>
        )
    }
}
export default FriendForm;