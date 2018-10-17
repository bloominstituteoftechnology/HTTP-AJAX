import React, { Component } from 'react';
import axios from 'axios';
import route from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state ={
        friends: [],
        newFriend: {
          name: '',
          age: '',
          email: '',
        }
      }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((response)=> this.setState({friends: response.data}))
      .catch((error)=> console.log('iz not werking'))
  }

   changeHandler = (e) => {
    console.log(e)
  }


  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends}
          newFriend={this.state.newFriend}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

const Friends = props => {
  return(
      <div>
        My friends
          <form>
            <input onChange={props.changeHandler} type='text' name="name" value={props.newFriend.name}></input>
            <input type='text' name='age' value={props.newFriend.age}></input>
            <input type='text' name='email' value={props.newFriend.email}></input>
            <button>Submit</button>
          </form>
        <div>
        {props.friends.map(item => (
            <div className="friends" key={item.id}>
              <h4>{item.name}</h4>
              <p>{item.age}</p>
              <p>{item.email}</p>
            </div>
              ))}
        </div>
      
      </div>

      )
}

export default App;
