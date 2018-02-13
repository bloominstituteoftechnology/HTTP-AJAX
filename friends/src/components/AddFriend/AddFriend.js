import React, { Component } from 'react';
import axios from 'axios';
import App from '../../App'

class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    }
    console.log('I am props in AddFriend: ', props);
    return (
        <form onSubmit={props._friendSubmitHandler} className="af">
            <label> Name: </label><input type="text" name="name" value={props.name} onChange={props._friendChangeHandler} placeholder="name" />
            <label> Age: </label><input type="text" name="age" value={props.age} onChange={props._friendChangeHandler} placeholder="age" />
            <label> Email: </label><input type="text" name="email" value={props.email} onChange={props._friendChangeHandler} placeholder="email" />
            <button type="submit" className="fs__button" >add friend</button>
        </form>
    )
    _friendChangeHandler = (event) => {
        let { name, value } = event.target;
        console.log('I am state in the _friendChangeHandler: ', this.state)
        this.setState({ [name]: value });
        if (event.target.type === 'number') {
            value = Number(number)
        }
      }
      _friendSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/friends', this.state)
        .then(result => this.setState({friends: result.data, name: '', age: '', email: ''}))
        .catch(error => console.log(error))
    }
}


export default AddFriend;
