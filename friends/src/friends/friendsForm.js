import React, { Component } from 'react';

class FriendForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            friends: {
                name: "",
                age: "",
                email: ""
            }
        }
    }

    handleChange = e => {
        this.setState({
          friends: {
            ...this.state.friends,
            [e.target.name]: e.target.value
          }
        });
      };
    addFriend = e => {
        e.preventDefault();
        this.props.addNewFriendsToServer(this.state.friends);
        this.setState({
            friends: {
                name: "",
                age: "",
                email: ""
            }
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addFriend}>
                    <input type="text" name="name" placeholder="name" value={this.state.friends.name} onChange={this.handleChange} />
                    <input type="text" name="age" placeholder="age" value={this.state.friends.age} onChange={this.handleChange}/>
                    <input type="text" name="email" placeholder="email" value={this.state.friends.email} onChange={this.handleChange}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FriendForm;