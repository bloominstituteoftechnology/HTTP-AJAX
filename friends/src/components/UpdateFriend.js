import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class UpdateFriend extends Component {
  constructor() {
    super()
    this.state = {
      friend: {},
      newName: '',
      newAge: '',
      newEmail: ''
    }

    
    
  }
  updateFriend = (event) => {
      event.preventDefault();
        
      const newFriend = {
        name: this.state.newName,
        age: this.state.newAge,
        email: this.state.newEmail
      }
      
      axios.put(`http://localhost:5000/friends/${this.props.match.params.id}`, newFriend)
      .then(response => {
        // this.getData();
        console.log(response, 'post');
      })
      .catch(error => {
        console.log(error);
      });
    }



  componentDidMount() {
    console.log(this.props.match)
    axios.get("http://localhost:5000/friends")
      .then(response => {
        let update = {};
        console.log(response)
        response.data.forEach(friend => {
          if (friend.id === Number(this.props.match.params.id)) {
            update = friend;
          }
        })

        this.setState({ 
          friend: update,
          newName: update.name,
          newAge: update.age,
          newEmail: update.email
        });
        console.log(response);
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

  

  // addFriend = (event) => {
    
  //   event.preventDefault();
    
  //   const newFriend = {
  //     name: this.state.newName,
  //     age: this.state.newAge,
  //     email: this.state.newEmail
  //   }
    
  //   axios.post("http://localhost:5000/friends", newFriend)
  //   .then(response => {
  //     this.setState({
  //       newName: '',
  //       newAge: '',
  //       newEmail: '',
  //     })
  //     // this.getData();
  //     console.log(response, 'post');
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

    
  //   console.log('submitted');

    

  //   // axios({
  //   //   method: 'post',
  //   //   url: "http://localhost:5000/friends",
  //   //   data: newFriend
  //   // });

    
  // }
  render() {
    return(
      <Form  onSubmit={this.updateFriend}>
        <Input required type="text" placeholder={this.state.name} onChange={this.updateName} value={this.state.newName}/>
      
        <Input required type="number" placeholder={this.state.age} onChange={this.updateAge} value={this.state.newAge}/>
      
        <Input required type="text" placeholder={this.state.email} onChange={this.updateEmail} value={this.state.newEmail}/>
        <Button><Link to='/'>Update Friend</Link></Button>
      </Form>
    )
  }
}