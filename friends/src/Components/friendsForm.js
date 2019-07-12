import React, { Component } from "react";
import axios from 'axios';

class FriendsForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            age: "",
            email: "",
        }
    }


    DaFriendsHandler = event => {
        this.setState ({[event.target.name]: event.target.value})
    }

      handleSubmitFriend = () => {
        const friend = {name : this.state.name, age : Number(this.state.age), email : this.state.email};
        axios
        .post("http://localhost:5000/friends", friend)
        .then (response => {
          console.log("post response", response);
          this.setState({friendsData: response.data, name: " ", age: " ", email: " "});
        })
        .catch(error=>{
          console.log(error)
        })
      }
      render(){
    return(
        <div>
            <form>
            <input
                 type = "text"     
                 name = "name"             
                 value = {this.state.name}
                 onChange = {this.DaFriendsHandler}
                 placeholder = "add friend name"
            /> <br></br>
             <input 
                  type = "number"
                  name = "age"
                  value = {this.state.age}
                  onChange = {this.DaFriendsHandler}
                  placeholder = "add age"
             /> <br></br>
             <input 
                  type = "text"
                  name = "email"
               value = {this.state.email}
               onChange = {this.DaFriendsHandler}
               placeholder = "add email"
             /> <br></br>
             <button onClick = {this.handleSubmitFriend}>
                 Submit Friend
            </button>
            </form>
        </div>
    )
}
}

export default FriendsForm;