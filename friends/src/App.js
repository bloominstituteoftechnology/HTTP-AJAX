import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './Friends/Friends';
import Form from './Form';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then( ( response ) =>{
        this.setState(() => ({friends: response.data}));
       })
    .catch(error => {
        console.error('Server Error', error);
    });
  }
  deleteFriend = id => {
    return()=>{
      axios.delete(`http://localhost:5000/friends/${id}`)
        .then(( response ) => {
          this.setState(() => ({ friends: response.data }));
        })
        .catch(err => console.log(err))
    }
 
  }
  render() {
    
    return (
      <div className="App">
        <div>
            <Form arr ={this.state.friends} />
        </div>
        <div className = 'cards'>
           {this.state.friends.map((item,index) => 
          <Friends key = {item.id}friend={item}  delete = {this.deleteFriend}/>)}
        </div>
      </div>
    );
  }
}
 export default App;