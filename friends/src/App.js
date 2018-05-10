import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
    this.handleChange = this.handleChange;
    this.buttonSubmit = this.buttonSubmit;
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(err => { throw new Error(err) })
  }

  handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) };
  buttonSubmit = () => {
    const { name, age, email } = this.state;
    axios.post('http://localhost:5000/friends', { name, age, email })
      .then((response) => {
        this.setState({ friends: response.data, name: '', age: '', email: '' })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, Friends!</h1>
        </header>
        <h3>Add Friend</h3>
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name} />
        <input type="number" placeholder="Age" name="name" onChange={this.handleChange} value={this.state.age} />
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
        <button onClick={this.buttonSubmit}>Submit</button>
        <h1 className="App-intro">
          
          List of Cool Friends
        </h1>
        <FriendsList results={this.state.friends} />
      </div>
    );
    //  <div>
    //   {/* user*/}
      
    //   {/*remove above*/}
    //   <h1>Friends:</h1>
    //   <ul className="friends">
    //     {this.state.friends.map(friend => {
    //       return <li key={friend.id} className="friend">
    //         <p>Name:{friend.name}</p>
    //         <p>Age: {friend.age}</p>
    //         <p>Email: {friend.email}</p>
    //       </li>;
    //     })}
    //   </ul>
    // </div>;
  }
  
}
  


export default App;





