import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Friend.js';
import Form from './Form.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      id: 0,
      name: '',
      age: 0,
      email: ''
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends')
      .then( response => {
        if(typeof response.data.message === 'string'){
          Promise.reject("Error: Friends not found :( ")
        }
        this.setState({ data: response.data})
      })
      .catch( err=> console.log(err))
    }

  handleChange = (event)=>{
    this.setState({
      [event.target.id]: event.target.value
    })
  }


  submit = (e) => {
    e.preventDefault();
    let newID = this.state.data.length+1;
    console.log(newID);
    this.setState({
      id: newID
    })

    const newObj = {
        id: this.state.id,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
    }

    axios.post('http://localhost:5000/friends', newObj)
      .then(response=>{
        this.setState({
          data: response.data
        })
      })
      .catch( err=>console.log("Couldn't update axios"))

    document.getElementById('form').reset();

  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.data.id}</h1>
        < Form 
          change={this.handleChange}
          submit={this.submit} />
        {this.state.data.map(item => (
          <Friend key={item.id} friend={item} />
        ))}
      </div>
    );
  }
}

export default App;


//use router so when user goes to edit, 
//the friend fields become input fields
//1:46:00