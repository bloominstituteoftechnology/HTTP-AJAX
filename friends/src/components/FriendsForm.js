import React, { Component } from "react";

class FriendsForm extends Component {
constructor() {
super();
this.state={
  newFriend:{
  name:"",
  age:"",
  email:""
  }}
}
handleChange = e => {
  this.setState({
    newFriend: {
      ...this.state.newFriend,
      [e.target.name]: e.target.value
    }
  });
  postMessage = e =>{
    e.preventDefault();
    this.setState({
      newFriend:{
        name:"",
        age:"",
        email:"" 
      }
    })
  }

};
render(){
  return(
    <div className="friend-form">
     <h2> POST (add) a new friend</h2>
     <form onSubmit={this.postMessage}>
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
      </form>  
    </div>
)}

}
export default FriendsForm;