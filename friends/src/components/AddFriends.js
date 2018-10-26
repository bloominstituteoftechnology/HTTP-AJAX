import React, {Component} from 'react';
import axios from 'axios';
import './AddFriend.css';

class AddFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: this.props.friends,
      name: '',
      age: '',
      email: '',
    };
  }                     

  addFriendHandler = event => {
    this.setState({ 
      [event.target.name]: event.target.value
     });
  }

  submitFriendHandler = event => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }
    axios
      .post('http://localhost:5000/friends', friend )
      .then(response => {
        this.setState({ friends:response.data })
      })
      .catch(error => console.log(error));
  }

  editFriend = (id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends:response.data })
      })
      .catch(error => console.log(error));
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends:response.data })
      })
      .catch(error => console.log(error));
  }

  render(){
    return (
      <div className="addFriend">
        <h3>Add New Friend:</h3>
        <form>
          Name: <input 
                  value={this.state.name}
                  name='name' 
                  type='text'
                  placeholder="enter name"
                  onChange={this.addFriendHandler} />
          <br></br>
          Age: <input 
                  value={this.state.age}
                  name='age'
                  type='text'
                  placeholder="enter age"
                  onChange={this.addFriendHandler}  />
          <br></br>
          Email: <input 
                  value={this.state.email}
                  name='email'
                  type='text'
                  placeholder="enter email"
                  onChange={this.addFriendHandler}  />
          <br></br>
          <button type="submit" onClick={this.submitFriendHandler}>Submit</button>
          <button type="submit" onClick={() => this.editFriend(this.state.editId)}>Edit</button>
        </form>    
      </div>
  
    )
  }
}

export default AddFriends;