import React, { Component } from "react";

class FriendsForm extends Component {
constructor() {
super();
this.state={
  newFriend:{
  name:"",
  age:0,
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
        age: 0,
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
            name="friend"
            placeholder="Friend's name"
           
            />
      </form>  
    </div>
)}

}
export default FriendsForm;