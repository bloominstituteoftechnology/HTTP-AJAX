import React, { Component } from 'react';
import axios from 'axios';
import {Button, Form, FormGroup, Input, Label } from 'reactstrap';




export default class FriendDetails extends Component {
    constructor(props){
      super(props)
      this.state = {
        friends: [],
        name: '',
        age: '',
        email: '',


      }
    }
  
    componentDidMount(){
      axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data, name: '', age: '', email: ''})
        })
        .catch(err => {
            console.log(err)
        }) 
    }
    postUsers = (event) => {
        const {name, age, email } = this.state
        axios.post('http://localhost:5000/friends', {name, age, email})
        .then(response =>{
            return this.setState({friends: response.data});
        })
        .catch(error =>{
            console.log(`This happened: ${error}`);
        })
        
    }

    deleteUsers = (event) => {
        const {name, age, email} = this.state;
        axios.delete(`http://localhost:5000/friends`, { name, age, email })
        .then(response =>{
            return this.setState({friends: response.data})
        })
        .catch(error =>{
            return alert(`This happened: ${error}`);
        })
    }

    putUsers = (event) => {
        const {name, age, email} = this.state
        axios.put(`http://localhost:5000/friends`, {name, age, email})
        .then(response => {
            return this.setState({friends:response.data})
        })
        .catch(error => {
            return alert(`There's an error!`);
        })
    }

    handleChange = event => {
       { this.setState({ [event.target.name]: event.target.value })};
    } 
    
    handleSubmit = (e) => {
        e.preventDefault();
       const newState = this.state;
       axios.post('http://localhost:5000/friends', {newState})
       .then(response => {response.data})
       .catch(err => console.log(err))
       }

    render() {
        return(
            <div>
                <h3>Join my Slack Channel!</h3>
                    <Form inline onSubmit={this.handleSubmit}>
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
                        <Input type = "text" name = "email" id="emailAddress" placeholder="something@idk.cool"  />
                        </FormGroup>
                        <Button type="onSubmit" className = "button" onClick = {this.handleSubmit}>Submit Now!</Button>
                        <Button type="onSubmit" className = "button" onClick= {this.handleSubmit}>Remove Now!</Button>
                        <Button type="onSubmit" className = "button" onClick= {this.handleSubmit}> Update Now! </Button>
                    </Form>
                   <br/>
                   <br/>
    
                
                
            </div>

            
        );
        
    }
}
