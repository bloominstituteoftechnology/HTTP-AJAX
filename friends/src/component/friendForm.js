import React from 'react';

class FriendForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            friend: {
                name: "",
                age: "",
                email: ""
            }
        }
    }

    createFriend = (e) => {
        e.preventDefault();
        this.props.sendForm(this.state.friend);
    }

    handleChange = e => {
        this.setState({
          friend: {
            ...this.state.friend,
            [e.target.name]: e.target.value
          }
        });
      };

    render() {
        return <div>
        <h3>New Friend</h3>
        <form onSubmit={this.createFriend}>
            <input 
            type='text' 
            name="name"
            onChange={this.handleChange}
            value={this.state.friend.name}
            />
            
            <input 
            type='text' 
            name="age"
            onChange={this.handleChange}
            value={this.state.friend.age} 
            />
            
            <input 
            type='text' 
            name="email"
            onChange={this.handleChange}
            value={this.state.friend.email} 
            />

            <input type='submit' />
        </form>
        </div>
    }
}

export default FriendForm;