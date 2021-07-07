import React, {Component} from 'react';
import axios from 'axios';

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            email: ''
        }
    };
    
    handleFriendChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value, 
            [event.target.age]: event.target.value, 
            [event.target.email]: event.target.value})
    };
    
    addNewFriend = (event) => {
        // event.preventDefault();
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        axios.post(`http://localhost:5000/friends`, friend)
            .then(response => {
                console.log(response); 
                console.log(response.data)
            })  
            .catch((err) => console.log)
    }
    
    render() {
        return (  
        <div>
            <form onSubmit={this.addNewFriend}>
                <input type="text" placeholder="Name" name="name" onChange={this.handleFriendChange} value={this.state.name} autoComplete="off" />
                <input type="number" placeholder="Age" name="age" onChange={this.handleFriendChange} value={this.state.age} autoComplete="off" />
                <input type="email" placeholder="Email" name="email" onChange={this.handleFriendChange} value={this.state.email} autoComplete="off" /> 
                <button>Submit</button>
            </form>  
        </div>           
        );
    }
}
 
export default FriendForm;