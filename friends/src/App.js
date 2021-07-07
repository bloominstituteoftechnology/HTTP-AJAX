import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MyForm from './components/MyForm';
import Friends from './components/Friends';
import { Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: '',
      age: 0,
      id: [],
      email: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends/')
      .then(response => {
        console.log(response)
        this.setState({ 
          data: response.data
        });
      })
      .catch(err => console.log(err));
  }

  changeName = event => {
    this.setState({
        name: event.target.value
    })
}

  changeID = event => {
    this.setState({
        id: event.target.value
    })
  }

  changeEmail = event => {
    this.setState({
        email: event.target.value
    })
  }

  changeAge = event => {
    this.setState({
        age: event.target.value
    })
  }

  click = event => {
    event.preventDefault();

    axios
    .post('http://localhost:5000/friends/', {
      name: this.state.name,
      id: this.state.id,
      email: this.state.email,
      age: this.state.age
    })

    .then(newResponse => {
      console.log(newResponse)
      this.setState({ 
        data: newResponse.data
      });
    })
    .catch(err => console.log(err));
}

  update = (event, id) => {
    event.preventDefault();

    axios
      .put(`http://localhost:5000/friends/${this.state.id}`, {
        name: this.state.name,
        id: this.state.id,
        email: this.state.email
      })

      .then(newResponse => {
        console.log('from update', newResponse)
        this.setState({ 
          data: newResponse.data
        });
      })
      .catch(err => console.log(err));
  }

      delete = (event, id) => {
        event.preventDefault();
    
        axios
          .delete(`http://localhost:5000/friends/${this.state.id}`)
    
          .then(newResponse => {
            console.log('from update', newResponse)
            this.setState({ 
              data: newResponse.data
            });
          })
          .catch(err => console.log(err));
      }

  render() {
    console.log('this state data', this.state.data)
    console.log('this state name', this.state.name)
    return (
      <div className="App">

      <Route exact path="/" render={props => (
          <Friends
            {...props}
              data={this.state.data}
          />
      )} />

        <MyForm 
            data={this.state.data}
            updateData={this.updateData}
            click={this.click}
            changeName={this.changeName}
            changeID={this.changeID}
            changeEmail={this.changeEmail}
            changeAge={this.changeAge}
            update={this.update}
            delete={this.delete}
          />
      </div>
    );
  }
}

export default App;
