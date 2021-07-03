import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Friends from './components/Friends';


import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      name: '',
      age: 0,
      email: ''
    };
  }

componentDidMount(){
  axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
}
  
deleter = (id) => {
        
  console.log("outside deleter id", id)

  axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => { console.log("inside deleter id", id)
          this.setState({ FriendsList: response.data });
      })
      .catch(event => console.log("caught deleter id", id))
}



  render() {
    return (
      <div className="App">
        <h1>New Friend?</h1>
        <br></br>
        <Form />
        <br></br>
        <div>{this.state.friends.map(each => <Friends data={each} key={each.id} deleter={this.deleter} />)}</div>
        
      </div>
    );
  }
}

 




export default App;
