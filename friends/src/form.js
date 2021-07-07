import React from 'react';
import axios from 'axios';

// passed as props from App.js 
// updateFriendsList={this.updateFriendsList}
// updateEntry={this.updateEntry}
//clicked={this.state.clicked}
// updateID={this.state.updateID}

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: "",
                age: "",
                email: ""
            }
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    }

    addFriend = e => {
        this.props.updateFriendsList(this.state.friend);
        this.setState({
            friend: {
                name: "",
                age: "",
                email: ""
            }
        });
    };


    render() {
        console.log(this.state)
    return (
    <div className="form">
         
            <h4>Add more friends to your list:</h4>
            <input 
                type="text"
                placeholder="First Name" 
                name="name"
                onChange={this.handleChange}
                value={this.state.friend.name}
                />
            <input 
                type="text" 
                name="age"
                placeholder="Age" 
                name="age"
                onChange={this.handleChange}
                value={this.state.friend.age}
                />
            <input 
                type="email"
                name="email" 
                placeholder="Email Address" 
                name="email" 
                onChange={this.handleChange}
                value={this.state.friend.email}
                />
            <button onClick={() => this.addFriend()}>Add</button>
        
    </div>
    )
    }
}

export default FriendForm