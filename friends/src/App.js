import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Components/Friend'


class App extends Component {
  constructor(){
    super()
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({data:response.data}))
    .catch(error => console.log('error. ',error))
  }
  render() {
    console.log('data..', this.state.data);
    return (
      
      <div className="App">
        {
         this.state.data.map(element => {
           return <Friend data={element}/>
         })
        }
      </div>
    );
  }
}

export default App;
