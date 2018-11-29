import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MyForm from './components/MyForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: '',
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

  click = event => {
    event.preventDefault();

    axios
    .post('http://localhost:5000/friends/', {
      name: this.state.name,
      id: this.state.id,
      email: this.state.email
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

      // , {
      //   data: this.state.data,
      //   {
      //     name: this.state.name,
      //     id: this.state.id,
      //     email: this.state.email,
      //   }
      // }

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
        {this.state.data.map(item => (
        <li>
          {item.name}
          {item.age}
          {item.email}
        </li>
        ))}

        <MyForm 
          data={this.state.data}
          updateData={this.updateData}
          click={this.click}
          changeName={this.changeName}
          changeID={this.changeID}
          changeEmail={this.changeEmail}
          update={this.update}
          delete={this.delete}
        />
      </div>
    );
  }
}

export default App;
