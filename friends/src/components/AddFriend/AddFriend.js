import React from "react";
import './AddFriend.css';
import axios from "axios";

class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = (e) => {this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, age, email} = this.state;
        axios.post('http://localhost:5000/friends', {name, age, email})
          .then(response => console.log(response))
          .catch(error => console.log(`${error}`))
    }

    render() {
        return (
            <form className="form" id="addFriend">
                <input type="text" placeholder="name"  onChange={this.handleChange} name="name"required/>
                <input type="number" placeholder="age" onChange={this.handleChange} name="age"required/>
                <input type="email" placeholder="email" onChange={this.handleChange} name="email"required/>
                <button onSubmit={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default AddFriend;