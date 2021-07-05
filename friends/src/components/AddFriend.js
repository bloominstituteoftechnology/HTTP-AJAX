import React from 'react';
import axios from 'axios';

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state={
      url: 'http://localhost:5000/friends',
      name: '',
      age: 0,
      email: ''
    }
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
    axios
      .post(this.state.url, newFriend)
      .then(response => {
        this.setState({
          name:'',
          age: 0,
          email: ''
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
    }


  render() {
    return(
      <div className='add-friend'>
        <h2>Add A Friend</h2>
        <form onKeyPress={key => {
            if(key.charCode === 13) this.submitHandler();
          }}>
          <input name='name' placeholder=' Enter Name' onChange={this.inputHandler} value={this.state.name} type='text' />
          <input name='age' placeholder=' Enter Age' onChange={this.inputHandler} value={this.state.age} type='number' />
          <input name='email' placeholder=' Enter Email' onChange={this.inputHandler} value={this.state.email} type='email' />
        </form>
        <button onClick={this.submitHandler} className='submit'>Submit</button>
      </div>
    )
  }
}
export default AddFriend;
