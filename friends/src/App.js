import React from 'react';
import './App.css';
import axios from 'axios';
import Friend from './components/friends'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
      id: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response)
        this.setState({ friends: response.data })
      })
  }
  onChangeHandler = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value })
  }

  addFriendHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/friends", {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email

    })
      .then(response => {
        console.log(response)
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err))
  }

  deleteFriend = (id) => {
    return () => {
      axios.delete(`http://localhost:5000/friends/${id}`)
        .then(response => {
          this.setState({ friends: response.data })
        })
        .catch(err => console.log(err))
    }
  }

  updateFriend = (e, id, name, age, location) => {
    id = this.state.id
    e.preventDefault()
    axios.put(`http://localhost:5000/friends/${id}`,
      {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      }
    )
      .then(response => {
        this.setState({ friends: response.data })
      })
  }

  render() {
    return (
      <div className='container'>
        <Friend data={this.state.friends} deleteFriend={this.deleteFriend} />
        <div className='friendsForm'>
          <form onSubmit={this.addFriendHandler} className='form'>
            <h2>Add Friend</h2>
            <input onChange={this.onChangeHandler} placeholder='Name' name='name' value={this.state.name} />
            <input onChange={this.onChangeHandler} placeholder='Age' name='age' value={this.state.age} />
            <input onChange={this.onChangeHandler} placeholder='Email' name='email' value={this.state.email} />
            <button>Submit</button>
          </form>
          <form onSubmit={this.updateFriend} className='form'>
            <h2>Update Friend</h2>
            <input onChange={this.onChangeHandler} placeholder='Name' name='name' value={this.state.name} />
            <input onChange={this.onChangeHandler} placeholder='Age' name='age' value={this.state.age} />
            <input onChange={this.onChangeHandler} placeholder='Email' name='email' value={this.state.email} />
            <input onChange={this.onChangeHandler} placeholder='ID' name='id' value={this.state.id} />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
