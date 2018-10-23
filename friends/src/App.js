import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Friend.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends')
      .then( response => {
        console.log('It works');
        console.log(response.data)
        this.setState({ data: response.data})
      })
      .catch( err=> console.log(err))
    }

  test = (e) => {
    e.preventDefault();
    console.log(this.state.data)  
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map(item => (
          <Friend key={item.id} friend={item} />
        ))}
        <form>
          <h1>Add a new friend!</h1>
          <input type='text' placeholder='name'></input>
          <input type='number' placeholder='age'></input>
          <input type='email' placeholder='email'></input>
          <button onClick={this.test}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;


