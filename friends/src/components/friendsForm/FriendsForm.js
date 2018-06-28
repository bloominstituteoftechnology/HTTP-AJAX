import React, { Component } from "react";
import axios from 'axios';

class FriendsForm extends Component{
    constructor(props){
        super(props);
        this.state={
            // data: friendsData,
            name: "",
            age: "",
            email: "",
        }
    }

    // handleNameChange = e => {
    //     console.log(e)
    //     this.setState ({name : e.target.value})
    //   }
    
    //   handleAgeChange = e => {
    //     console.log(e)
    //     this.setState ({age: Number(e.target.value)})
    //   }
    
    //   handleEmailChange = e => {
    //     console.log(e)
    //     this.setState ({email: e.target.value})
    //   }
    
    editFriendsHandler = e => {
        this.setState ({[e.target.name]: e.target.value})
    }

      handleSubmitFriend = () => {
        const friend = {name : this.state.name, age : Number(this.state.age), email : this.state.email};
        axios
        .post("http://localhost:5000/friends", friend)
        .then (response => {
          console.log("post response", response);
          this.setState({friendsData: response.data, name: "", age: "", email: ""});
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
                 onChange = {this.editFriendsHandler}          
                 value = {this.state.name}
                 placeholder = "add friend name"
            /> <br></br>
             <input 
                  type = "number"
                  name = "age"
                 onChange = {this.editFriendsHandler}
                  value = {this.state.age}
                  placeholder = "add age"
             /> <br></br>
             <input 
                  type = "text"
                  name = "email"
               onChange = {this.editFriendsHandler}
               value = {this.state.email}
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