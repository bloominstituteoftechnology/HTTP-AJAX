import React, { Component } from 'react';
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
    let newId = this.state.friends.length + 1;
    this.setState({
      id:newId
    })

    const Friendz = {
      id:this.state.id,
      name:this.state.name,
      age:this.state.age,
      email:this.state.email
    }

    axios
    .post("http://localhost:5000/friends", Friendz)
    .then(response => {
      this.setState({friends:response.data})
    })
    .catch( error => console.log(error))
  }



render() {
    return(
        <div className="App">
          {this.state.friends.map(item => (
              <Friends key={item.id} friends={item} />
          ))}
          <form>
            <input type="text" placeholder="name" name="name" onChange={this.changeHandler}></input>
            <input type="text" placeholder="age" name="age" onChange={this.changeHandler}></input>
            <input type="email" placeholder="email" name="email" onChange={this.changeHandler}></input>
            <button onClick={this.addFriend}>Save</button>
          </form>
        </div>
        )
      }
}

export default App;
