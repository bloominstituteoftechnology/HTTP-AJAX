import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    }
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({ friends: response.data });
      })  
      .catch(err => {
        console.log(err);
      });
    }
    handleTextChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    saveData = () => {
      const poo = { name: this.state.name, age: this.state.age, email: this.state.email };
      axios
      .post(`http://localhost:5000/friends`, poo) //Poo is the perfect crux for my entire project hahahah
      .then(savedData => {
        console.log(savedData);
      })
      .catch(error => {
        console.log(error);
      });
      this.setState({ name: '', age: '', email: '' });
    };
  render() {
    return (
      <div className="App">
      {this.state.friends.map(friend => {
        return (
          <div className="friend-card" >
          <div key={friend.id} className="frenNotFood">
          <div className="friend friendName"> Name: {friend.name} </div>
          <div className="friend friendAge"> Age: {friend.age} </div>
          <div className="friend friendEmail"> Email: {friend.email} </div>
        
          </div>
          
          </div>
          
          
        )
        
      })}
        <div>
        <div>  <form>
              <label>
                <input  type="text" name="name" onChange={this.handleTextChange} placeholder="Name Here" />
                
              </label>
                <input type="number" name="age" onChange={this.handleTextChange} placeholder="Age Here" />
                
                <input type="text" name="email" onChange={this.handleTextChange} placeholder="Email Here" />
              <button type="submit" value="Submit" onClick={this.saveData}> Press ME</button>
            </form>
            </div>
      </div>
      </div>
    );
  }
}

export default App;

