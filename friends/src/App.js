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



      console.log('is update handle it yo..', friend)
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
  handleTextChange = event =>{
    this.setState({[event.target.id]:event.target.value})
  }
  handleDeleteFriend = event =>{
    axios.delete(`http://localhost:5000/friends/${event.target.id}`)
    .then(response => this.getAllFriends())
    .catch(error => console.log('error. ',error))

  } 
  handleUpdateFriend = event =>{

    let friend = this.state.data.find(el =>{
      return el.id == event.target.id
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
    console.log('data..', this.state.data);
    return (
      
      <div className="App">
        {
         this.state.data.map(element => {
           return <Friend handleDeleteFriend={this.handleDeleteFriend} 
                          key={element.id} 
                          data={element}
                          handleUpdateFriend={this.handleUpdateFriend}/>
         })
        }
        <NewFriend handleAddNewFriend = {this.handleAddNewFriend}
                   handleTextChange = {this.handleTextChange} 
                   name={this.state.name}
                   age={this.state.age}
                   id={this.state.id}
                   email={this.state.email}
                   isUpdate={this.state.isUpdate}/>
      </div>
    );
  }
}

export default App;
