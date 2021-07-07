import React from 'react';
import axios from 'axios';

import FriendForm from './form';
//passed as props from app.js
//update={this.state.update} 
//updateFriendsList={this.updateFriendsList} 
//updateID={this.state.updateID} 
//clicked={this.state.clicked}
//resetStateAfterUpdate={this.resetStateAfterUpdate}

class UpdateForm extends React.Component {
    constructor() {
        super();
        this.state = {
            update: [],
            id: ''
        }
        
    }
componentDidMount() {
    this.setState({
        update: this.props.update,
        id: this.props.updateID
    })
}

handleChange = e => {
    this.setState({
        update: {
            ...this.state.update,
            [e.target.name]: e.target.value
        }
    });
}

updateFriend = (id, obj) => {
    console.log(id)
    console.log(obj)
    this.props.resetStateAndUpdate(id, obj);
    this.setState({
        update: {
            name: "",
            age: "",
            email: ""
        }
    });
};

    render(){
        console.log(this.state.id)
        return (
            <div className="form">
                
                <h4>Update your Friend</h4>
                <input 
                    type="text"
                    placeholder="First Name" 
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.update.name}
                />
                <input 
                    type="text" 
                    name="age"
                    placeholder="Age" 
                    name="age"
                    onChange={this.handleChange}
                    value={this.state.update.age}
                />
                <input 
                    type="email"
                    name="email" 
                    placeholder="Email Address" 
                    name="email" 
                    onChange={this.handleChange}
                    value={this.state.update.email}
                />
                <button onClick={() => this.updateFriend(this.props.updateID, this.state.update)}>Update</button>
                
            </div>
            )
    }
}

export default UpdateForm