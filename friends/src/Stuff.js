import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import List from './Display'



class Appp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateFriend: false,
      friends: [],
      name: "",
      age: "",
      email: ""
    }
  }
  componentDidMount() {
    this.getFriends();
  }
  getFriends = () => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({ friends: response.data });
      })  
      .catch(err => {
        console.log(err);
      });
    }
  showUpdateFriend = () => {
      this.setState({ showUpdateFriend: !this.state.showUpdateFriend});
    }
  deleteFriend = friendId => {
      axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then(response => {
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
    }
    updateFriend = friendId => {
      const friend ={};
      if (this.state.name !== '') {
        friend.name = this.state.name;
      }
      if (this.state.age !== '') {
        friend.age = this.state.age;
      }
      if (this.state.email !== '') {
        friend.email = this.state.email;
      }
      axios
      .put(`http://localhost:5000/friends/${friendId}`, friend)
      .then(response => {
        this.setState({ showUpdateFriend: false, name: '', age: '', email: '' });
        this.componentDidMount();
      })
    }
    handleTextChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    // saveData = () => {
    //   const poo = { name: this.state.name, age: this.state.age, email: this.state.email };
    //   axios
    //   .post(`http://localhost:5000/friends`, poo) //Poo is the perfect crux for my entire project hahahah
    //   .then(savedData => {
    //     console.log(savedData);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    //   this.setState({ name: '', age: '', email: '' });
    // };
  render() {
    const { friend } = this.props;
    return (
      <div className="App">
      {this.state.friends.map(friend => {
        return (
          <div className="friend-card" >
          <div key={friend.id} className="frenNotFood">
          <div className="friend friend1 friendName"> Name: {friend.name} </div>
          <div className="friend friend1 friendAge"> Age: {friend.age} </div>
          <div className="friend friendEmail"> Email: {friend.email} </div>
          <button onClick={() => this.deleteFriend(friend.id)}> Delete Friend</button>
          <button onClick={this.showUpdateFriend}>Update Friend</button>
  
            {this.state.showUpdateFriend ? (
              <div>
                <input  type="text" name="name" onChange={this.handleTextChange} placeholder="Name Here" />
                <input  type="number" name="age" onChange={this.handleTextChange} placeholder="Age Here" />
                <input  type="text" name="email" onChange={this.handleTextChange} placeholder="Email Here" />
                <button onClick={() => this.updateFriend(friend.id)}>
                Save Updates
                </button>
                </div>
            ) : null}

          </div>
          
          </div>
          
          
          
        )
        
      })}
        {/* <div>
        <div className="columnCenter">  <form>
          <div className="columnA">
              <label>
                <input  type="text" name="name" onChange={this.handleTextChange} placeholder="Name Here" />
                
              </label>
                <input type="number" name="age" onChange={this.handleTextChange} placeholder="Age Here" />
                
                <input type="text" name="email" onChange={this.handleTextChange} placeholder="Email Here" />
              <button type="submit" value="Submit" onClick={this.saveData}> Press ME</button>
            </div>
            </form>
            </div>
      </div> */}
      <List />
      </div>
    );
  }
}

export default Appp;
