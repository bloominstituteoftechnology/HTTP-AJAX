import React from 'react';


class FriendEditForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            friend: props.friend
        }
    }

    updateFriend = (e) => {
        e.preventDefault();
        this.props.updateFriend(this.state.friend);
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
        return <form onSubmit={this.updateFriend}>
            <input 
            type='text' 
            name="name"
            onChange={this.handleChange}
            value={this.state.friend.name}
            />
            
            <input 
            type='number' 
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

            <button type="submit">Edit</button>
        </form>
    }
}

export default FriendEditForm;