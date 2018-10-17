import React, { Component } from "react";
import axios from "axios";
import FriendView from './FriendView';

class FriendViewContainer extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      newFriend:{
        id:'',
        name:'',
        age:'',
        email:'',
      }
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({friendsData: response.data}))
      .catch(error => console.log(error));
  }
  changeHandler=(event)=>{
    this.setState({
        newFriend:{
            ...this.state.newFriend,
            [event.target.name]:event.target.value
        }
    })
  }
  submitHandler=(event)=>{
      event.preventDefautl();
      axios.post("http://localhost:5000/friends",this.state.newFriend)
        .then(response=>console.log(response.data))
  }
  render() {
    return (
        <div>
            <FriendView friendsData={this.state.friendsData}/>
            <form type='submit' onSubmit={this.submitHandler}>
                ID: <input type='text' placeholder='ID' name='id' value={this.state.newFriend.id} onChange={this.changeHandler}></input>
                Name: <input type='text' placeholder='Name' name='name'  value={this.state.newFriend.name} onChange={this.changeHandler}></input>
                Age: <input type='text' placeholder='Age' name='age'  value={this.state.newFriend.age} onChange={this.changeHandler}></input>
                Email: <input type='text' placeholder='Email' name='email'  value={this.state.newFriend.email} onChange={this.changeHandler}></input>
                <button onClick={this.submitHandler}> Add friend</button>
            </form>
        </div>
    )
    }
  }

export default FriendViewContainer;