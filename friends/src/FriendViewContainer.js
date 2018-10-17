import React, { Component } from "react";
import axios from "axios";
import FriendView from './FriendView';

class FriendViewContainer extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      id:'',
      name:'',
      age:'',
      email:'',
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({friendsData: response.data}))
      .catch(error => console.log(error));
  }
  changeHandler(){

  }
  render() {
    return (
        <div>
            <FriendView friendsData={this.state.friendsData}/>
            <form type='submit' onSubmit={this.submitHandler}>
                ID: <input type='text' placeholder='ID' name='id'></input>
                Name: <input type='text' placeholder='Name' name='name'></input>
                Age: <input type='text' placeholder='Age' name='age'></input>
                Email: <input type='text' placeholder='Email' name='email'></input>
                <button onClick={this.submitHandler}></button>
            </form>
        </div>
    )
    }
  }

export default FriendViewContainer;