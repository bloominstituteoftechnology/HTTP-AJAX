import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
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

handleChange = event => {
  this.setState({ [event.target.name]: event.target.value });  }

handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name, age: this.state.age, email: this.state.email
    };
    axios
    .post('http://localhost:5000/friends', user)
      .then(response => {
        console.log(response);
        // console.log(response.data);
        this.setState( {name: '', age: '', email: ''} )
      })

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       
        <div>
          {this.state.friends.map(friend => {
          return (
            <div className="Friends">
                <div> Name: {friend.name} </div>
                <div> Age: {friend.age} </div>
                <div> Email: {friend.email} </div>
            </div>
        )})}
          
       

        <div> 
            <form >
                <label>
                  Add a new friend!
                    <ul>
                      Friend Name:
                        <input 
                          type="text"
                          placeholder="Name"
                          onChange={(event) => {this.handleChange(event)}}
                        />
                    </ul>
                    <ul>
                      Friend Age:
                        <input 
                          type="number"
                          placeholder="Age"
                          onChange={(event) => {this.handleChange(event)}}
                        />
                    </ul>
                    <ul>
                      Friend Email:
                        <input 
                          type="text"
                          placeholder="Email"
                          onChange={this.handleChange}
                        />
                    </ul>
                </label>
                <button onClick={this.handleSubmit} type="submit">Add Friend</button>
            </form>
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;
