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

  componentDidMount(){
    let editFriend= this.props.editFriend;
    if(editFriend){
      this.setState({
        name: editFriend.name,
        age: editFriend.age,
        email: editFriend.email
      })
    }
  }

  componentDidUpdate(prevProps, previousState){
    let editFriend= this.props.editFriend;
    if(editFriend){
      if(editFriend.name !== previousState.name)
      this.setState({
        name: editFriend.name,
        age: editFriend.age,
        email: editFriend.email
      })
    }
  }
  

  handleChange = e => {
    if(e.target.name === 'name'){
      this.setState({name: e.target.value})
    }
    if(e.target.name === 'age'){
      this.setState({age: e.target.value})
    }
    if(e.target.name === 'email'){
      this.setState({email: e.target.value})
    }
  }

  


  render() {
    return (
      <div className="form">
        <form onSubmit={e =>{
          e.preventDefault();
          if(this.props.editFriend){
            const updateFriendObj = {
              name: this.state.name,
              age: Number(this.state.age),
              email: this.state.email,
              id: this.state.id
            }
            this.props.updateToList(updateFriendObj);
          }else{
            const newFriendObj = {
              name: this.state.name,
              age: Number(this.state.age),
              email: this.state.email,
              id: (this.props.friends.length+1)
            }
            this.props.addToList(newFriendObj);
          }
          
          

        }}>

        <input type='text' name='name' placeholder='name' onChange={this.handleChange} value={this.state.name} />
        <input type='text' name='age' placeholder='age' onChange={this.handleChange} value={this.state.age} />
        <input type='email' name='email' placeholder='email' onChange={this.handleChange} value={this.state.email} />

        <button>Add Friend</button>

        </form>
      </div>
    );
  }
}