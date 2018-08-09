import React, { Component } from 'react';
import axios from 'axios';
import List from './List'; 
import './App.css';


const url = "http://localhost:5000/friends"

class App extends Component {
  constructor(){
    super(); 
    this.state={
      friend: [],
      loading: true,
      name: '',
      age: '',
      email: ''
    }
  }
  componentDidMount(){
    axios.get(url).then(response=>{
      console.log(response);
      this.setState({
        friend: response.data
      })
     })
  }
  render() {
    return (
      <div className="friend-list">
      <List list={this.state.friend} />
      <form onSubmit={this.handleSubmit}>
          <label>
            Name:
              <input type="text" value={this.state.name} onChange={this.handleName} />
          </label>
          <label>
            Age:
              <input type="text" value={this.state.age} onChange={this.handlePrice} />
          </label>
          <label>
            email:
              <input type="text" value={this.state.email} onChange={this.handleEmail} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
 export default App;