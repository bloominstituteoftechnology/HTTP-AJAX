import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Components/Friend';
import NewFriend from './Components/NewFriend';


class App extends Component {
  constructor(){
    super()
    this.state = {
      data:[],
      name:'',
      age:'',
      email:''
    }
  }

  componentDidMount(){
    this.getAllFriends();
  }

  addFriend(friend){
    axios.post('http://localhost:5000/friends',friend)
    .then(response => this.getAllFriends())
    .catch(error => console.log('error. ',error))
  }
  getAllFriends(){
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({data:response.data}))
    .catch(error => console.log('error. ',error))
  }

  handleAddNewFriend = event =>{
    event.preventDefault();

    let newFriend = {
            name:this.state.name,
            age:this.state.age,
            email:this.state.email,
            }
    this.addFriend(newFriend)

  }  
  handleTextChange = event =>{
    this.setState({[event.target.id]:event.target.value})
}


  render() {
    console.log('data..', this.state.data);
    return (
      
      <div className="App">
        {
         this.state.data.map(element => {
           return <Friend key={element.id} data={element}/>
         })
        }
        <NewFriend handleAddNewFriend = {this.handleAddNewFriend}
                   handleTextChange = {this.handleTextChange} />
      </div>
    );
  }
}

export default App;
