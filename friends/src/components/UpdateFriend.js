import React from 'react';
import axios from 'axios';

class UpdateFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

        const id = 3;

        axios.get(`http://localhost:5000/friends/${id}`)
    }
    
    render() {
        return (
            <form onSubmit={this.props.addFriend}>
                <input 
                    type="text" 
                    onChange={this.props.changeHandler} 
                    placeholder="name" 
                    value={this.props.friend.name}
                    name="name"
                />
                <input 
                    type="number" 
                    onChange={this.props.changeHandler} 
                    placeholder="age" 
                    value={this.props.friend.age}
                    name="age"
                />
                <input 
                    type="text" 
                    onChange={this.props.changeHandler} 
                    placeholder="email" 
                    value={this.props.friend.email}
                    name="email"
                />
                <button type="submit">Update Friend!</button>
            </form>
            )
        }
}

export default UpdateFriend;