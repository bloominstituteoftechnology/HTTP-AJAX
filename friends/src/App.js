import React, { Component } from 'react';
import './App.css';
import FriendList from './component/FriendList'
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  };
  getNextId = () => {
    return this.nextId++;
  }

  addNewFriend = (e) => {

    let newFriend ={ name: this.state.name, age: this.state.age, email: this.state.email };
    
    e.preventDefault();

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({name:'',age:'',email:''});
      })
      .catch(error => {
          console.log(error);
          
      });
    
  }



  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    
  };
  
  removeFriend = (id) => {
    // console.log(id);
    // const newFriend = this.state.friends.filter(friend => {
    //   return friend.id !== id
    // });

    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data});
        console.log(res.data);    
      })
      .catch(error => {
          console.log(error);
          
      });
   
  };

  render() {

    return (
  
        <div className="App-intro">
          <FriendList obj={this.state.friends} removeFriend={this.removeFriend}/>
          
          <div className="friend">
            <form onSubmit={this.addNewFriend}>
              <label>Name: </label>
              <input  name='name' value={this.state.name} onChange={this.handleInputChange} type="text"/>

              <label>Age: </label>
              <input type="text" name='age' value={this.state.age} onChange={this.handleInputChange}/>

              <label>Email:  </label> 
              <input type="text" name='email' value={this.state.email} onChange={this.handleInputChange}/>

              <button type="submit" value="Submit">Add Friend</button>
            </form>
          </div>
        </div>
        )
 }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(res => {
      this.setState({friends: res.data});
    })
    .catch(error => {
      console.log('there was error', error);
    });
  }
}

export default App;
