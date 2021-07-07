import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';

import Friend from './Friend';

// Takes in props:
// - name={friend.name} 
// - age={friend.age} 
// - email={friend.email}

class EditFriend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: [],
            name: this.props.location.state.name,
            age: this.props.location.state.age,
            email: this.props.location.state.email,
            id: this.props.match.params.id,
            updName: "",
            updEmail: "",
            updAge: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleUpdate = (event) => {
        event.preventDefault();
        this.updateList( this.state.id, this.state.updName, this.state.updAge, this.state.updEmail);
    };

    updateList = (id, name, age, email) => {
        axios.put(`http://localhost:5000/friends/${id}`, {
            name: name,
            age: age,
            email: email
        })
        .then( response => {
            this.setState({
                name: name, email: email, age: age,
                updName: "", updEmail: "", updAge: ""
            })
        })
        .catch( error => console.log(error));
    };

    render() {
        return(
            <>
            <div className='editFriend'>
                <div>Edit:</div>
                <Friend name={this.state.name} age={this.state.age} email={this.state.email} />
            </div>
            <div>
                <form onSubmit={this.handleUpdate}>
                    <input type='text' name='updName' placeholder='Name' onChange={this.handleChange} />
                    <input type='text' name='updAge' placeholder='Age' onChange={this.handleChange} />
                    <input type='text' name='updEmail' placeholder='Email' onChange={this.handleChange} />
                    <button>Edit</button>
                </form>
            </div>
            </>
        );
    };
};

export default EditFriend;