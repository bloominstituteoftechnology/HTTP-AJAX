import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Route} from 'react-router-dom'

const Friendos = (props) => { 
  return (
    <div className="friendz">
      {props.friends.map(friend => (
      <div className="friendCard">
        <div className="friendoname">{friend.name}</div>
        <div className="ageo">age: {friend.age}</div>
        <div className="emailo">email: {friend.email}</div>
        <button onClick={()=> props.deleteAFrand(friend.id)}>Delete</button>
      </div>
      ))}
    </div>
  )
}

const FriendForm = (props) => {
  return (
    <form>
      <p>Add a new frand!</p>
      <input name="Name" onChange={props.enterAFrand} value={props.val.Name} placeholder="Name"/>
      <input name="Age" onChange={props.enterAFrand} value={props.val.Age} placeholder="Age"/>
      <input name="Email" onChange={props.enterAFrand} value={props.val.Email} placeholder="Email"/>
      <button type="button" onClick={props.addAFrand}>Add</button>
    </form>
  )
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      Name: "",
      Age: [], 
      Email: ""
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  addAFrand = () => {
    const newfrand = {
      id: Date.now(),
      name: this.state.Name,
      age: this.state.Age,
      email: this.state.Email
    }
    axios
    .post('http://localhost:5000/friends', newfrand)
    .then(response => {
      this.setState(() => ({ friends: response.data }));
    }).catch(error => {
      console.error('Friend addin Error', error);
    });
    this.setState({Name: "", Age: [], Email: ""})
  }

  enterAFrand = (event) => {
    this.setState ({ [event.target.name] : event.target.value});
  }

  deleteAFrand = (id) => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      this.setState(() => ({ friends: response.data }));
    }).catch(error => {
      console.error('Friend deletin Error', error);
    });
  }

  render() {
    return (
      <div className="App">
      <h1>~~My Frands~~</h1>
      <Route path="" render={(props) => <Friendos {...props} deleteAFrand={this.deleteAFrand} friends={this.state.friends}/>}/>
      <FriendForm enterAFrand={this.enterAFrand} addAFrand={this.addAFrand} val={this.state}/>
      </div>
    );
  }
}

export default App;
