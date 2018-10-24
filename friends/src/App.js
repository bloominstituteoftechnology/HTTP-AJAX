import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: []
     }
  }

componentDidMount() {
  axios
  .get('http://localhost:5000/friends')
  .then(response => {
    this.setState({friends: response.data })
  })
}







  render() { 
    return (  
      <div className="App">
        
      </div>

      
    );
  }
}
 
export default App;
