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
  
  setName = (e) => {
    const {value} = e.target;
    this.setState({
      name: value
    })
  }

  setAge = (e) => {
    const {value} = e.target;
    this.setState({
      age: value
    })
  }

  setEmail = (e) => {
    const {value} = e.target;
    this.setState({
      email: value
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
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.data.id}</h1>
        < Form 
          setName={this.setName}
          setEmail={this.setEmail}
          setAge={this.setAge} submit={this.submit}/>
        {this.state.data.map(item => (
          <Friend key={item.id} friend={item} />
        ))}
      </div>
    );
  }
}

export default App;



// submit = (e) => {
//   e.preventDefault();
//   console.log(this.state.id)
//   let newID = this.state.data.length+1;
//   this.setState({
//     id: newID
//   })

//   let newObj = {
//       id: this.state.id,
//       name: this.state.name,
//       age: this.state.age,
//       email: this.state.email
//   }

//   axios.post('http://localhost:5000/friends', {data: newObj} )
//     .then(response=>{
//         axios.get('http://localhost:5000/friends')
//       .then( response => {
//         if(typeof response.data.message === 'string'){
//           Promise.reject("Error: Friends not found :( ")
//         }
//         this.setState({ data: response.data})
//       })
//       .catch( err=> console.log(err))
//     })
//     .catch( err=>console.log("Couldn't update axios"))

//     console.log(this.state.data)
// }