import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friend from './Friend'
import Friends from './Friends'
import axios from '../node_modules/axios'

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      sort: 'name',
      name: '',
      age: '',
      email: '',
    }
  }

  sortHandler = (event) => {
    const ID = event.target.id;
this.setState({sort:ID})  }

NinputHandler = (event) => {
  const value = event.target.value

this.setState({
  name: value
})}

AinputHandler = (event) => {
  const value = event.target.value

this.setState({
  age: value
})}

EinputHandler = (event) => {
  const value = event.target.value

this.setState({
  email: value
})}

submitHandler = (event) => {
  event.preventDefault();

  const NAME = this.state.name;
  const AGE = Number(this.state.age);
  const EMAIL = this.state.email.toLowerCase();
  
  axios.post("http://localhost:5000/friends", {name: NAME, age: AGE,email: EMAIL})
  .then(response => {this.setState({friends: response.data})
console.log(response)})
}

  componentDidMount() {
        axios
        .get("http://localhost:5000/friends")
        .then (response => {this.setState({
          friends: response.data})
       })
        .catch (err => console.log(err));
    }
  render() {
    console.log(this.state.name, this.state.age, this.state.email)
    return (
      <div className="App">
      <form className='form' action="">
      <div className='groupfield'>
      <h2>Name:</h2>
        <input className='field' type="text" value={this.state.name} onChange={this.NinputHandler}></input>
      </div>
      <div className='groupfield'>
      <h2>Age:</h2>
        <input className='field' type="text" value={this.state.age} onChange={this.AinputHandler}></input>
      </div>
      <div className='groupfield' value={this.state.email} onChange={this.EinputHandler}>
      <h2>Email:</h2>
        <input className='field' type="text"></input>
      </div>
      <button onClick={this.submitHandler}>Sign Up</button>
      </form>
      <h2>Sort by</h2>
      <div className='Sort'>
      <button onClick={this.sortHandler} id={'name'}> Name </button>
      <button onClick={this.sortHandler} id={'age'}> Age </button>
      <button onClick={this.sortHandler} id={'email'}> Email </button>
      </div>
        <section className="Friends">
        <Friends friends={this.state.friends} sort={this.state.sort} clickHandler={this.clickHandler} />
        </section>
      </div>
    );
  }
}

export default App;
