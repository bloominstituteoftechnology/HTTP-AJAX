import React from 'react';
import FriendInfo from './FriendInfo';
import axios from 'axios';

class UpdateFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
            friend: {},
        }
    }

    componentDidMount() {
        const friend = this.props.friends.filter(item => {
            return item.id === this.props.match.params.id;
        })[0];
        console.log(friend);
        //this.setState({ friend: friend })
    }

    handleChange = event => {
        const name = event.target.name
        this.setState({ [name]: event.target.value })
    }

    updateFriendHandler = (e) => {
        e.preventDefault();
        const id = this.state.friend.id
        this.props.updateHandler(id, this.state.name, this.state.age, this.state.email)
    }

    render() {
         
        return (
          <div>
            <form onSubmit={this.props.submitHandler}>
                <h3>New Friend? Enter their info: </h3>
                <input type="text" name="name" placeholder="Name" onChange={this.props.handleChange} value={this.props.name} />
                <input type="text" name="age" placeholder="Age" onChange={this.props.handleChange} value={this.props.age} />
                <input type="text" name="email" placeholder="Email" onChange={this.props.handleChange} value={this.props.email} />
                <button type="submit">Submit</button>
                <h4>Go back to your friends list to see them there</h4>
            </form>
            <form onSubmit={this.updateFriendHandler}>
                <h3>Update their info: </h3>
                <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
                <input type="text" name="age" placeholder="Age" onChange={this.handleChange} value={this.state.age} />
                <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
                <button type="submit">Update</button>
                <h4>Go back to your friends list to see them updated</h4>
            </form>
                <FriendInfo {...this.state.friend} deleteHandler={this.props.deleteHandler} />
          </div>            
        )
    }
}

export default UpdateFriend;