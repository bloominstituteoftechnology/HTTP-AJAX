import React, { Component } from 'react';
import Friend from './Components/Friends/friends.js';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    friends: [],
    newName: '',
    newAge: 0,
    newEmail: '',
  }
  
  render() {
    return (
      <div className="container">
        <div className="grid">
          {this.state.friends.map(friend => {
            return <Friend 
            key={friend.id} 
            friend={friend}
            />;
          })}
        </div>
        <form className="form" onSubmit={this.addNewFriend}>
          <input type="text" onChange={this.handleNewName} placeholder="Name Here"  value={this.state.newName}/>
          <input type="text" onChange={this.handleNewAge} placeholder="Age Here" value={this.state.newAge}/>
          <input type="text" onChange={this.handleNewEmail} placeholder="Email Here" value={this.state.newEmail}/>
          <input type="submit" value="Add Friend" />
        </form>
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data});
      })
      .catch(error => {
        console.log('there was error', error);
      });
  }

  handleNewName = (event) => {
    this.setState({newName: event.target.value});
  }

  handleNewAge = (event) => {
    this.setState({newAge: event.target.value});
  }

  handleNewEmail = (event) => {
    this.setState({newEmail: event.target.value});
  }

  addNewFriend = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', {
        name: this.state.newName,
        age: this.state.newAge,
        email: this.state.newEmail,
      })
      .then(response => {
        this.setState({ friends: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default App;

/*
state = {
            todo: [
                {
                    id: 1,
                    text: 'This',
                },
                { 
                    id: 2,
                    text: 'That',
                },
                {
                    id: 3,
                    text: 'Other',
                }
            ],
            newToDo: '',
    }

    addNewToDo = (event) => {
        event.preventDefault();
        const todo = this.state.todo;
        const newID = todo.length + 1;
        const item = this.state.newToDo;
        todo.push({id: newID, text: item});
        this.setState({
            newToDo: '',
            todo: todo,
        });
    }

    handleNewToDo = (event) => {
        this.setState({newToDo: event.target.value});
    }


    render() {
        return (
            <div>
                <ul>
                    {this.state.todo.map(item => {
                        return <Item key={item.id} item={item} />;
                    })}
                </ul>
              
                <form onSubmit={this.addNewToDo}>
                    <input type="text" onChange={this.handleNewToDo} value={this.state.newToDo} />
                    <input type="submit" value="Submit New To Do Item to List" />
                </form>
            </div>
        )
    }
}
*/
