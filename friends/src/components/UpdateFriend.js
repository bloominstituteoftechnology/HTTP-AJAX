import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';
import { Redirect } from 'react-router';
import axios from 'axios';

export default class UpdateFriend extends Component {
  constructor() {
    super()
    this.state = {
      friend: {},
      redirect: false,
      newFriend: {
        newName: '',
        newAge: '',
        newEmail: ''
      }
    }
    this.updateForm = this.updateForm.bind(this);
    
    
  }
  updateFriend = (event) => {
      event.preventDefault();
        
      const newFriend = {
        name: this.state.newFriend.newName,
        age: this.state.newFriend.newAge,
        email: this.state.newFriend.newEmail
      }
      
      axios.put(`http://localhost:5000/friends/${this.props.match.params.id}`, newFriend)
      .then(response => {
        // this.getData();
        
        console.log(response, 'post');
        console.log(this.context, 'context')
        this.setState({ redirect: true });
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
          newFriend: {
          newName: update.name,
          newAge: update.age,
          newEmail: update.email
          }
        });
        console.log(response);
      })
      .catch(err => console.log(err))
  }
  

  // updateName = (event) => {
  //   this.setState({ newName: event.target.value })
  //   console.log(this.state);
  // }
  // updateAge = (event) => {
    
  //   this.setState({ newAge: Number(event.target.value) })
  //   console.log(this.state);
  // }
  // updateEmail = (event) => {
  //   this.setState({ newEmail: event.target.value })
  //   console.log(this.state);
  // }

  updateForm = (event) => {
    let newFriend = this.state.newFriend;

    newFriend[event.target.name] = event.target.value;

    this.setState({ newFriend });
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
    if (this.state.redirect) {
      return <Redirect push to="/" />
    }
    return(
      <Form  onSubmit={this.updateFriend}>
        <Input required name="newName" type="text" onChange={this.updateForm} value={this.state.newFriend.newName}/>
      
        <Input required name="newAge" type="number" onChange={this.updateForm} value={this.state.newFriend.newAge}/>
      
        <Input required name="newEmail" type="text" onChange={this.updateForm} value={this.state.newFriend.newEmail}/>
        <Button>Update Friend</Button>
      </Form>
    )
  }
}