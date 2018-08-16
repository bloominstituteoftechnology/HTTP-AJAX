import React, { Component } from 'react';
import axios from 'axios';
// import Form from './components/Form';
import Friends from './components/Friends';


import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      name: ''
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
  

  render() {
    return (
      <div className="App">
        <h1>New Friend?</h1>
        <br></br>
        <Form />
        <br></br>
        <div>{this.state.friends.map(each => <Friends data={each} />)}</div>
        
      </div>
    );
  }
}

 
class Form extends React.Component {
      constructor(){
          super()
          // this.state ={
          //     friends: []
          // };
      
      }
      
      handleChange = event => {
          this.setState({ friends: event.target.value});
          console.log(event.target.value)
      }   
  
  
      refreshPage = event => {
          window.location.reload();
      } 
  
  
      handleSubmit = event => {
          event.preventDefault();
  
          const user = {
              name: this.state.name
          }
  
      
      
          axios.post('http://localhost:5000/friends', {user})
          .then(res => {
              console.log(res.data);
          });
      };
      
      
  
      
  
  
  
      render(){
          return (
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" onChange={this.handleChange} placeholder="Enter Name" ></input>
                {/* <input type="number" placeholder="Enter Age"></input> */}
                <button type="submit" onClick={this.refreshPage}>.push()</button>
              </form>
          )
      }
  
  
  }




export default App;
