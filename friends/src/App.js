import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Components/Friend';
import NewFriend from './Components/NewFriend';
import { Route } from 'react-router-dom';
import ViewFriend from './Components/ViewFriends'


class App extends Component {
  constructor(){
    super()
    this.handleViewFriendClick = this.handleViewFriendClick.bind(this);
    this.handleUpdateFriend = this.handleUpdateFriend.bind(this);
    this.handleDeleteFriend = this.handleDeleteFriend.bind(this);
    this.state = {
      data:[],
      friend:null,
      name:'',
      id:'',
      age:'',
      email:'',
      isUpdate:false
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
    if (this.state.isUpdate){
      let friend = this.state.data.find(el =>{
        return el.id=this.state.id;
      })

      friend.name = this.state.name
      friend.age = this.state.age
      friend.email = this.state.email

      axios.put(`http://localhost:5000/friends/${friend.id}`,friend)
      .then(response => this.setState({
                                        data:response.data,
                                        isUpdate:false,
                                        name:'',
                                        age:'',
                                        email:''

                                      }),)
      .catch(error => console.log('error. ',error))
    } else {
      let newFriend = {
        name:this.state.name,
        age:this.state.age,
        email:this.state.email,
        }
        this.addFriend(newFriend)
        this.setState({
          name:'',
          age:'',
          email:''
        })        

    }

  }
  handleViewFriendClick(event,id){
    let fr = this.state.data.find(el =>{
      return el.id===id;
    })
    this.setState({friend:{
                            id:fr.id,
                            age:fr.age,
                            email:fr.email,
                            name:fr.name
                          }})

  }  
  handleTextChange = event =>{
    this.setState({[event.target.id]:event.target.value})
  }
  handleDeleteFriend(event,id){
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response => this.getAllFriends())
    .catch(error => console.log('error. ',error))

  } 
  handleUpdateFriend(event,id){
    let friend = this.state.data.find(el =>{
      return el.id == id
    })
    this.setState({
                   isUpdate:true,
                   id:friend.id,
                   name:friend.name,
                   age:friend.age,
                   email:friend.email,
                 })

  }

  render() {
    return (
      
      <div className="App">
        {
         this.state.data.map(element => {
           return <Friend handleDeleteFriend={this.handleDeleteFriend} 
                          key={element.id} 
                          data={element}
                          handleUpdateFriend={this.handleUpdateFriend}
                          handleViewFriendClick={this.handleViewFriendClick}/>
         })
        }
        <NewFriend handleAddNewFriend = {this.handleAddNewFriend}
                   handleTextChange = {this.handleTextChange} 
                   name={this.state.name}
                   age={this.state.age}
                   id={this.state.id}
                   email={this.state.email}
                   isUpdate={this.state.isUpdate}/>

        <Route path='/friends/:id' render={(props)=><ViewFriend {...props} data={this.state.friend}/>}></Route>

      </div>
    );
  }
}

export default App;
