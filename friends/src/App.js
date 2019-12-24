import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Person from './Components/Person';
import PersonForm from './Components/PersonForm';


// this change will hopefully allow me to be on my 'own branch'


class App extends Component {
  constructor(){
    super();
    this.state={
      friends:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends').then(response=>this.setState({friends:response.data}))
  }
render(){
  return(
    <div className="App">
      <h1>My Friends</h1>
      <section className="person">
        <div className="personCards">
          {this.state.friends.map(friend=>(
            <Person key={friend.id}name={friend.name}age={friend.age}address={friend.email}/>
          ))}
        </div>
        <PersonForm/>
      </section>
    </div>
  )
}
}
export default App;