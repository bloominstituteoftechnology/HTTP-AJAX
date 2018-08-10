import React from 'react';
import axios from 'axios';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    let id = parseInt(props.match.params.id,10);
    this.state={
      url: 'http://localhost:5000/friends',
      id: id,
      friend: [],
      name: '',
      age: 0,
      email: ''
    }
  }

  componentDidMount() {
      this.getFriend();
  }

  getFriend = () => {
    axios.get(this.state.url).then(response => {
      let id = this.state.id;
      let friend = response.data.filter(person => person.id === id);
      friend = friend[0];
      this.setState({
        friend: friend,
        name: friend.name,
        age: friend.age,
        email: friend.email
      });
    });
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = () => {
    let name = this.state.name;
    let age = this.state.age;
    let email = this.state.email;
    let newFriend = {name: name, age: age, email: email};
    let url = this.state.url + '/' + this.state.id;
    axios
      .put(url, newFriend)
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
    }

    deleteUser = () => {
      let url = this.state.url + '/' + this.state.id;
      axios
        .delete(url)
        .then(response => {
          this.props.history.push('/');
        })
        .catch(err => {
          console.log(err);
        })
    }

    render() {
      return(
        <div className='friend-page'>
          <h1>Edit or Delete a Friend</h1>
          <form onKeyPress={key => {
              if(key.charCode === 13) this.submitHandler();
            }}>
            <input name='name' placeholder=' Enter Name' onChange={this.inputHandler} value={this.state.name} type='text' />
            <input name='age' placeholder=' Enter Age' onChange={this.inputHandler} value={this.state.age} type='number' />
            <input name='email' placeholder=' Enter Email' onChange={this.inputHandler} value={this.state.email} type='email' />
          </form>
          <button onClick={this.submitHandler} className='submit'>Edit</button>
          <button onClick={this.deleteUser} className='delete'>Delete</button>
        </div>
      )
    }
}

export default Friend;
