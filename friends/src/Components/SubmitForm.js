import React, { Component } from 'react';
import FriendsComponent from './FriendsComponent';
// import axios from 'axios';

class SubmitForm extends Component {
    constructor(props){
    super(props)
    
    this.state = {
        name: '',
        age: '',
        email: ''
    }     
}
    handleChange = (el) => {
        this.setState({ 
            [el.target.name]: el.target.value
        })
    } 
    handleSubmit = () => {
        this.props.handleSubmit(this.state)
        // this.props.setState('')
    }

    buttonSubmit = (el) => {
        this.setState({
            [el.target.name]: ''
        })
    }

render() {
    const {name, age, email} = this.state 
    return (
        <div>
            <input type= 'text' placeholder='name' name= 'name' value= {name} onChange={el => this.handleChange(el)}/>
            <input type= 'text' placeholder='age' name= 'age' value= {age} onChange={el => this.handleChange(el)}/>
            <input type= 'text' placeholder='email' name= 'email' value= {email} onChange={el => this.handleChange(el)}/>
            <button onClick={this.handleSubmit}>Add</button>
            {/* <button onClick={this.updateFriend(friend.id)}>Update Info</button> */}
            
        </div>
        )
    }

}
export default SubmitForm;