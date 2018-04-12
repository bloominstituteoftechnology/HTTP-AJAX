import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
import DisplayList from './components/DisplayList';
import Friend from './components/Friend';
import Header from './components/Header';
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
    console.log(this.state.friends)
     this.setState({friends:response.data})
  
  })
  .catch(err =>{
    console.log(err);

  })
}
  render() {
 console.log(this.state)
    return (
      <div>
           { <Route 
        exact path ="/" 
        render={props => <Header {...props} friends={this.state.friends}/>}
      /> }
        { <Route 
        exact path ="/" 
        render={props => <DisplayList {...this.state}{...props}/>}
      /> }
         
         { <Route 
         path ="/friend/:id" 
        render={props => <Friend {...props} friends={this.state.friends}/>}
      /> }
      
      </div>
 
    );
  }

}
export default App;
