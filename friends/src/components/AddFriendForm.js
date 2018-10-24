import React, {Component} from 'react';
import axios from 'axios'

class AddFriendForm extends Component {

  addFriendHandler = e => {
    this.setState({ 
      name : e.target.name,
      age: e.target.age,
      email: e.target.email,
     });
     this.addFriendHandler = this.addFriendHandler.bind(this);
  }

  submitFriendHandler = e => {
    e.preventDefault();
    const friend = {
      name: e.state.name,
      age: e.target.age,
      email: e.target.email,
    }
    axios
      .post('http://localhost:5000/friends', { friend })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render(){
    return (
      <div>
        <h1>Add Friend:</h1>
        <form>
          Name: <input 
                  value={this.name} 
                  type='text'
                  placeholder="enter name"
                  onChange={this.addFriendHandler} />
          <br></br>
          Age: <input 
                  value={this.age}
                  type='text'
                  placeholder="enter age"
                  onChange={this.addFriendHandler}  />
          <br></br>
          Email: <input 
                  value={this.email}
                  type='text'
                  placeholder="enter email"
                  onChange={this.addFriendHandler}  />
          <br></br>
          <button type="submit" onClick={this.submitFriendHandler}>Submit</button>
        </form>    
      </div>
  
    )
  }
}

export default AddFriendForm;