import React, { Component } from 'react';
import axios from 'axios';
export default class FriendForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            name: "",
            age: "",
            email: ""
        };

    }

    addFriend = (newFriend) => {
      axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => this.props.setState({ friends: res.data }, this.props.history.push('/')))
      .catch(err => {console.log(err)});
}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

     handleSubmit = (event) => {
        event.preventDefault()
          const newFriend = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email,
          }
          this.addFriend(newFriend);

          this.setState({
            name: '',
            age: '',
            email: ''
          })
        }

    render(){
        return(
            <div>
                <button onClick={this.handleSubmit} type="submit" >Add Friend</button>
                <div>
                    <form>
                        <label>NAME</label>
                        <input onChange={this.handleChange} name="name" value={this.state.name} placeholder="NAME"/>
                        <label>AGE</label>
                        <input onChange={this.handleChange} name="age" value={this.state.age} placeholder="AGE"/>
                        <label>EMAIL</label>
                        <input onChange={this.handleChange} name="email" value={this.state.email} placeholder="EMAIL"/>
                    </form>
                </div>
        </div>
        );
    }
}
