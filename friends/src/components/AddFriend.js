import React, { Component } from 'react';
import axios from 'axios';
import './AddFriend.css';


export default class AddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: "",
            age: "",
            email: "",
        };
    }

    componentDidMount() {
        this.getFriends();
      }
    
      getFriends = () => {
        axios
          .get("http://localhost:5000/friends")
          .then(response => {
            this.setState({ friends: response.data });
          })
          .catch(err => {
            console.log(err);
          });
      };
    
      handleTextInput = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      saveFriendInfo = () => {
        const friendInfo = { name: this.state.name, 
                             age: this.state.age, 
                             email: this.state.email 
                            };
        axios
          .post(`http://localhost:5000/friends`, friendInfo)
          .then(response => {
            console.log(response);
            this.getFriends();
          })
          .catch(err => {
            console.log(err);
          });
        this.setState({ name: "", age: "", email: "" });
      };   
    
    render() {
        return (
            <div className="AddFriendForm">
                <form className="formBox">
                    <div className="friendTitle"><p>Add A New Friend</p></div>
                    <input className="inputField1" onChange={this.handleTextInput} type="text" name="name" placeholder="Name" value={this.state.name} />
                    <input className="inputField" onChange={this.handleTextInput} type="number" name="age" placeholder="Age" value={this.state.age} />
                    <input className="inputField" onChange={this.handleTextInput} type="text" name="email" placeholder="E-mail" value={this.state.email} />
                    <button className="submitButton" onClick={this.saveFriendInfo}>Submit</button>
                </form>
            </div>
        )
    }
}
