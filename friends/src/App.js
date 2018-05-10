import React, { Component } from 'react';
import FriendList from './FriendList';
import axios from 'axios';
import FriendForm from './FriendForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: ' ',
      age: ' ',
      email: ' '      
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then((response) =>{
      this.setState({friends: response.data});
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    })
  }
  onChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(this.state);    
  };
  Delete = id => {
      axios.delete(`http://localhost:5000/friends/${id}`)
   .then((response) =>{
     this.setState({friends: response.data});   
   })
   .catch((error) => {
     console.error(error);
   })   
  };

  Update = id => {    
    axios.put(`http://localhost:5000/friends/${id}`
      )
      .then((result) => {
       this.setState({friends: result.data, name: '', age: '', email: ''});
      }).catch((error) => {
        console.log('error', error);           
      });
  }

  Submit = event => {
    event.preventDefault();
    if (this.state.name && this.state.age && this.state.email) {
    const { name, age, email } = this.state;

    axios.post('http://localhost:5000/friends', { 
      name, 
      age, 
      email, })
      .then((result) => {
       this.setState({friends: result.data, name: '', age: '', email: ''});
      }).catch((error) => {
        console.log('error', error);           
      });
    } else {
      alert('Please complete required fields!');
    }
      this.getFriend();
    };
    getFriend = () => {
      axios.get('http://localhost:5000/friends').then(response => {
        this.setState({friends: response.data});
      }).catch(error => {
        console.log('error', error);
      });
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to React</h1>
        </header>        
        <FriendList friends={this.state.friends} delete={this.Delete} update={this.Update} />      
        <FriendForm name={this.state.name} age={this.state.age} email={this.state.email} onChange={this.onChange} onClick={this.Submit} />        
      </div>
    );
  }
}

export default App;
