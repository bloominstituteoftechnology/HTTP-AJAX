import React, { Component } from 'react';
import axios from 'axios';


export default class FriendForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      email:''
    }
  }

  

  componentDidUpdate(prevProps, previousState){
    let editFriend= this.props.editFriend;
    if(editFriend.name){
      if(editFriend.name !== prevProps.editFriend.name)
      this.setState({
        name: editFriend.name,
        age: editFriend.age,
        email: editFriend.email
      })
    }
  }
  

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  


  render() {
    return (
      <div className="form">
        <form onSubmit={e =>{
          e.preventDefault();
         
          if(!this.props.editFriend.name){
            console.log('didnot')
            const newFriendObj = {
              name: this.state.name,
              age: Number(this.state.age),
              email: this.state.email,
              
            }
            this.props.addToList(newFriendObj);
          }else{
            console.log('didedit')
            const updateFriendObj = {
              id: this.props.editFriend.id,
              name: this.state.name,
              age: Number(this.state.age),
              email: this.state.email,
              
              
            }
            console.log(updateFriendObj)
            this.props.updateToList(updateFriendObj.id, updateFriendObj);
          }
          
          this.setState({
            name: '',
            age: '',
            email:''
          })
          

        }}>

        <input type='text' name='name' placeholder='name' onChange={this.handleChange} value={this.state.name} />
        <input type='text' name='age' placeholder='age' onChange={this.handleChange} value={this.state.age} />
        <input type='email' name='email' placeholder='email' onChange={this.handleChange} value={this.state.email} />

        <button>Submit</button>

        </form>
      </div>
    );
  }
}