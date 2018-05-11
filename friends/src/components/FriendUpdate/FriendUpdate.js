import React from "react";
import '../Friend/Friend.css';
import './FriendUpdate.css';
import axios from "axios";

class FriendUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            id: this.props.match.params.id
        }
    }

    componentDidMount() {    
        this.findFriend(this.state.id);   
    }

    findFriend = (friendId) => {
        const friend = this.props.data.filter(friend => friend.id == friendId)[0];
        this.setState({
            name: friend.name,
            age: friend.age,
            email: friend.email
        })
    }

    handleChange = (e) => {this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, age, email} = this.state;
        axios.post('http://localhost:5000/friends', {name, age, email})
          .then(response => console.log(response))
          .catch(error => console.log(`${error}`))
        this.setState({});
    }

    render() {
        return (
            <form className="form" id="updateFriend">
                <input type="text" placeholder={this.state.name}  onChange={this.handleChange} name="name"/>
                <input type="age" placeholder={this.state.age} onChange={this.handleChange} name="age"/>
                <input type="email" placeholder={this.state.email} onChange={this.handleChange} name="email"/>
                <button onSubmit={this.handleSubmit}>Update</button>
            </form>
        );
    }
}

export default FriendUpdate;