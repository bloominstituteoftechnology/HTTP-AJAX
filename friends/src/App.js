import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      newName: '',
      newAge: '',
      newEmail: ''
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
 
      this.setState({ friends: response.data });
    })
    
    .catch(error => {
      console.error('This did not work', error);
    });
  }

handleName = (event) => {
  this.setState({ newName: event.target.value }) };

handleAge = (event) => {
  this.setState({ newAge: event.target.value }) };

handleEmail = (event) => {
  this.setState({ newEmail: event.target.value }) };


handleSubmit = event => {  
    // event.preventDefault();

    const user = {
      name: this.state.newName, age: this.state.newAge, email: this.state.newEmail };

    axios
    .post('http://localhost:5000/friends', user)
    
    .then(response => {
        console.log(response);
        console.log(response.data);
    })
    .catch(err => {
        console.error('Something went amiss', err);
    })
      this.setState( {newName: '', newAge: '', newEmail: ''} )
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is our friend list
        </p>
       
        <div>
          {this.state.friends.map(friend => {
          return (
            <div className="Friends">
                <div> {`Name: ${friend.name}`} </div>
                <div> {`Age: ${friend.age}`} </div>
                <div> {`Email: ${friend.email}`} </div>
            </div>
        );
        })}
          </div>
       

        <div> 
            <form onSubmit={this.handleSubmit}>
                <label>
                  Add a new friend!
                    <ul>
                      Friend Name:
                        <input 
                          type="text"
                          placeholder="Name"
                          onChange={this.handleName}
                        />
                    </ul>
                    <ul>
                      Friend Age:
                        <input 
                          type="number"
                          placeholder="Age"
                          onChange={this.handleAge}
                        />
                    </ul>
                    <ul>
                      Friend Email:
                        <input 
                          type="text"
                          placeholder="Email"
                          onChange={this.handleEmail}
                        />
                    </ul>
                </label>
                <button type="submit">Add Friend</button>
            </form>
        </div>
        
      </div>
    );
  }
}

export default App;
