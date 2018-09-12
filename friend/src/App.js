import React, { Component } from 'react';
import FriendList from './components/FriendList';

// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      friends: [],
      name:"",
      age: 0,
      email:""
    }
  }

  handleInputChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  
  handleAddTodo = event => {
    event.preventDefault();
    if (this.state.name && this.state.age && this.state.email){
      this.setState({
        todo: [...this.state.todo, 
                {task: this.state.inputText,
                  id: Date.now(),
                  completed: false}
        ],
        inputText:""
       })
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      // console.log(response);
      // set our state with the new data
      this.setState({ friends: response.data });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
         {/* <form>
           First name: 
          <input type="text" value="Enter new friend's name" onChange={this.handleInputChange}></input>
           Age: 
           <input type="number" name="age" value="Enter new friend's age"></input>
           E-mail: 
           <input type="text" name="email" value="Enter new friend's e-mail"></input>
           <button ></button>
         </form> */}
         <FriendList friends={this.state.friends} />
      </div>
    )
  }
}

export default App;
