import React, {Component} from 'react';
import axios from 'axios';

class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: this.props.friends,
      name: '',
      age: '',
      email: '',
    };
    //this.addFriendHandler = this.addFriendHandler.bind(this);
  }                     

  // componentDidMount() {
  //   axios
  //     .get('http://localhost:5000/friends')
  //     .then(response => {
  //       this.setState(() => ({ friends: response.data }));
  //     })
  //     .catch(error => {
  //       console.error('Server Error', error);
  //     })
  // }

  addFriendHandler = e => {
    this.setState({ 
      [e.target.name]: e.target.value
     });
  }

  submitFriendHandler = e => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }
    axios
      .post('http://localhost:5000/friends', friend )
      .then(response => {
        this.setState({ friends:response.data })
      })
      .catch(error => console.log(error));
  }

  render(){
    return (
      <div>
        <h1>Add Friend:</h1>
        <form>
          Name: <input 
                  value={this.state.name}
                  name='name' 
                  type='text'
                  placeholder="enter name"
                  onChange={this.addFriendHandler} />
          <br></br>
          Age: <input 
                  value={this.state.age}
                  name='age'
                  type='text'
                  placeholder="enter age"
                  onChange={this.addFriendHandler}  />
          <br></br>
          Email: <input 
                  value={this.state.email}
                  name='email'
                  type='text'
                  placeholder="enter email"
                  onChange={this.addFriendHandler}  />
          <br></br>
          <button type="submit" onClick={this.submitFriendHandler}>Submit</button>
        </form>    
      </div>
  
    )
  }
}

export default AddFriendForm;