import React from 'react';
import axios from 'axios';
 

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            friends: []
        }
    }
     inputChangehandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, console.log(this.state))
	}
	 
     onSubmit = (e) => {
        e.preventDefault();
        axios
        .post(`http://localhost:5000/friends`, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
        .then(response => {
            this.props.addFriend(response.data);
        })
        .catch(err => console.log(err));
        this.setState({
            name: '',
            age: '',
            email: ''
        });  
    }
     render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.inputChangehandler}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        onChange={this.inputChangehandler}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={this.inputChangehandler}
                    />
                    <button type='submit'>Submit friend</button>
                </form>
            </div>
        );
    };
}
 export default Form;