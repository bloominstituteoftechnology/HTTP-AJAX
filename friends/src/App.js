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
      friends: [],
      name:'',
      age:'',
      email:''
    }
  }
componentDidMount(){
console.log('this is mounting')
this.updateGet()
}
updateGet(){
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




setInput = (element)=>{
  this.setState({[element.target.name]: element.target.value})
 }
 
 postData = ()=>{
     console.log("clicked")
 const newObj = {name: this.state.name, age: this.state.age, email: this.state.email}
 axios
 .post('http://localhost:5000/friends',newObj)
 .then(postedData =>{
     console.log("why?")
     console.log(postedData)
     this.componentDidMount();
 
 })
 .catch(err =>{
     console.log("i guess it broke")
 })
 console.log(this)
 this.setState({name: "", age:"", email: ""})
 }
  deleteFriend = (friendId, reset)=> {
  console.log('clicked')
  axios
    .delete(`http://localhost:5000/friends/${friendId}`)
    .then(response => {
      this.componentDidMount();
      return reset;
    })
    .catch(err => {
      console.log(err);
    });
};

  render() {
 console.log(this.state)
    return (
      <div>
           { <Route 
        exact path ="/" 
        render={props => <Header {...this.state} setInput={this.setInput} postData={this.postData} friends={this.state.friends}/>}
      /> }
        { <Route 
        exact path ="/" 
        render={props => <DisplayList {...this.state}{...props}/>}
      /> }
         
         { <Route 
         path ="/friend/:id" 
        render={props => <Friend {...props} updateGet={this.updateGet} deleteFriend={this.deleteFriend} friends={this.state.friends}/>}
      /> }
      
      </div>
 
    );
  }

}
export default App;
