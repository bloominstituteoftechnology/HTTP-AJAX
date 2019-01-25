import React, { Component } from "react";

class FriendsForm extends Component {
constructor() {
super();
this.state={
  newFriend:{
  name:"",
  age:null,
  email:""
  }}
}
handleChange = e => {
  this.setState({
    newFriend: {
      ...this.state.newFriend,
      [e.target.name]: e.target.value
    } 
  })
    console.log(e.target)
  }

  addFriend = e =>{
    e.preventDefault();
    this.props.postFriendToServer(this.state.newFriend);
    this.setState({
      newFriend:{
        name:"",
        age:"",
        email:"" 
      }
    })
    console.log()
  }

render(){
  return(
    <div className="friend-form">
     <h2> POST (add) a new friend</h2>
     <form onSubmit={this.addFriend}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.newFriend.name}
            />
            <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            value={this.state.newFriend.age}
            />
            <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.newFriend.email}
            />
            <button> Add </button>
      </form>  
      
    </div>
)}

}
export default FriendsForm;