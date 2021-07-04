import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './friend.css';

class FriendForm extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  componentDidMount(){
    if(this.props.updating === "true"){
      axios.get('http://localhost:5000/friends')
            .then(res =>{
              const friend = res.data.find(friend => friend.id === Number(this.props.match.params.id));
              this.setState({
                name: friend.name,
                age: friend.age,
                email: friend.email,
              });
            })
            .catch(err=> console.log(err));
    }
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.props.updating === 'true'){
      const updatedFriend = {
        name: this.state.name,
        age: parseInt(this.state.age, 10),
        email: this.state.email,
      };
      axios.put(`http://localhost:5000/friends/${this.props.match.params.id}`, updatedFriend)
            .then(res => {
              this.setState({name: '', age: '', email: '',});
              this.props.update(res.data);
              this.props.history.push('/');
              }
            )
            .catch(err => console.log(err));
    }else{
      const newFriend = {
        name: this.state.name,
        age: parseInt(this.state.age, 10),
        email: this.state.email,
      };
      axios.post('http://localhost:5000/friends', newFriend)
            .then( res =>{
                this.setState({name: '', age: '', email: '',});
                this.props.update(res.data);
                this.props.history.push('/');
              }
            )
            .catch(err => console.log(err));
    }
  }

  handleRemoveFriend = event => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${this.props.match.params.id}`)
          .then(res=>{
            this.setState({name: '', age: '', email: '',});
            this.props.update(res.data);
            this.props.history.push('/');
          })
          .catch(err => console.log(err));
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          placeholder="Enter Name"
          onChange={this.handleInputChange}
        />
        <label htmlFor="age">Age: </label>
        <input
          type="text"
          name="age"
          id="age"
          value={this.state.age}
          placeholder="Enter Age"
          onChange={this.handleInputChange} />
        <label htmlFor="email">E-Mail: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={this.state.email}
          placeholder="Enter E-Mail"
          onChange={this.handleInputChange} />
        <button type="submit">Submit!</button>
        {this.props.updating === 'true' ?
          <button className="btn-delete" onClick={this.handleRemoveFriend}>Delete This Friend</button> :
          null
        }
        <Link to="/"><div className="btn btn-return">Return</div></Link>
      </form>
    );
  }
}

export default FriendForm;
