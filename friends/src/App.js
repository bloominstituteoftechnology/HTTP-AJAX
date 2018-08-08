import React, { Fragment, Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';  

import './App.css';
import NewFriendForm from './NewFriendForm';
import FriendsList from './FriendsList'; 
import FriendPage from './FriendPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '', 
      email: ''
    };
  }

componentDidMount () {
  axios.get('http://localhost:5000/friends').then((response) => {
    console.log(response.data); 
    this.setState({
      friends: response.data
    })
  }); 
  
}
handleSubmit = event => {
   
  if(this.state.name.length && this.state.age.length && this.state.email.length){// if they are all greater than zero... 
    // do something with post. 
    const length = this.state.friends.length; //gets the number to set the id paramater needed because i use it as the key for the map method. 
    const data = {name: this.state.name.slice(), age : this.state.age.slice(), email: this.state.email.slice(), id: length + 1}// friends data to add. 
    axios.post('http://localhost:5000/friends', data)
         .then(response => {
           this.setState({name: '', age:'', email:''})
    });
    
  } else {
    alert('The name, age and email inputs are required add your friend!');
  }
}

handleOnChange = event => {
  this.setState({[event.target.name] : event.target.value})
}

  render() {
    
    return (
      <Fragment>
        
        <div>
        <Route  path = '/' render={(props) => <FriendsList {...props} friends = {this.state.friends.slice()}/>} />
        </div>
        <div>
        <Route path ='/create-friend'  render = {(props) => <NewFriendForm {...props} handleChange ={this.handleOnChange} 
        name = {this.state.name}  age = {this.state.age} email = {this.state.email} handleSubmit ={this.handleSubmit}/>} />
        </div>
        
        {/* <Route path = '/:name' render={(props) => <FriendPage {...props} /> }/> */}
      </Fragment>
    );
  }
}



export default App;
