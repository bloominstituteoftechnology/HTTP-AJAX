import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
import DisplayList from './components/DisplayList';
class App extends Component {
  constructor(){
    super()
    this.state ={
      friends: []
    }
  }
componentDidMount(){
  axios
  .get('http://localhost:5000/friends')
  
  .then(response => {
    console.log(response.data)
     this.setState({friends:response.data}) 
  })
  .catch(err =>{
    console.log(err);

  })
}
  render() {
    return (
      <div>
        <DisplayList {...this.state}/>
      </div>
 
    );
  }

}
export default App;
