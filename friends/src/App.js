import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom' 
import EditForm from './components/EditForm';
import Cards from './components/Cards';

class App extends Component {
  constructor(){
    super();
    this.state={
      items: [],
      name: '',
      age: '',
      email: ''
    };
  }
  
  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ items: response.data }))
      .catch(error => console.log(error))
  }

  handleInputChange = event => this.setState({ 
    [event.target.name]: event.target.value 
  });

  clickHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    this.setState({ name: "", age: "", email: "" });
    window.location.reload();
  };

  deleteItem = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ items: response.data });
        // this.props.history.push('/item-list');
      })
      .catch(error => console.log(error));
  };

  editItem = id=> {
    axios.put(`http://localhost:5000/friends/${id}`)
  };

  render() {
    return (
      <div className='contact-container'>        
        <h1>Contact Information</h1>
        <Route 
          path='/' 
          render={()=> 
            <Cards 
              items={this.state.items}
              clickHandler={this.clickHandler}
              deleteItem={this.deleteItem} />} 
        />

        <form className='form'>
          <h3>Add a contact</h3>
          <input 
            name='name' 
            value={this.state.name}
            placeholder='Name'
            onChange={this.handleInputChange}></input>
          <input 
            type='number'
            name='age' 
            value={this.state.age}
            placeholder='Age'
            onChange={this.handleInputChange}></input>
          <input 
            name='email' 
            value={this.state.email}
            placeholder='Email'
            onChange={this.handleInputChange}></input>
          <button onClick={this.clickHandler}>Submit</button>
        </form> 
        <Route path='/edit-form' render={props => <EditForm />} />  
      </div>
        
    );
  }
}

export default App;
