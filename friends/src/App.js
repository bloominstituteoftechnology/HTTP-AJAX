import React, { Component } from 'react';
import {Button} from 'reactstrap';
import Friends from './components/Friends'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        friends: [],
        name:'',
        age:'',
        email:''
    }
}

  componentDidMount() {
      axios
      .get("http://localhost:5000/friends")
      .then(response => {
          console.log(response)
          this.setState({friends: response.data})
      })
      .catch( error => console.log(error))
  }

  changeHandler = (event) => {
   this.setState({
     [event.target.name]:event.target.value
   })
   

  }

  addFriend = (event) => {
    event.preventDefault();
  
    const Friendz = {
      id:this.state.friends.length + 1,
      name:this.state.name,
      age:this.state.age,
      email:this.state.email
    }

    axios
    .post("http://localhost:5000/friends", Friendz)
    .then(response => {
      this.setState({
        friends:response.data,
         name: '', 
         age:'', 
         email:''
        })
    })
    .catch( error => console.log(error))
  }



render() {
    return(
        <div className="App">
          {this.state.friends.map(item => (
              <Friends key={item.id} friends={item} />
          ))}
          <form >
            <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.changeHandler}></input>
            <input type="text" placeholder="age" name="age" value={this.state.age} onChange={this.changeHandler}></input>
            <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.changeHandler}></input>
            <Button  color="success" onClick={this.addFriend} >Save</Button>
          </form>
        </div>
        )
      }
}

export default App;
