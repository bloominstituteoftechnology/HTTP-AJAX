import React from "react";
import '../Friend/Friend.css';
import './FriendUpdate.css';
import axios from "axios";

class FriendUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            friend: {}
        }
    }

    componentDidMount() {    
        this.findFriend(parseInt((this.props.match.params.id), 10));
    }

    findFriend = (friendId) => {
        const friend = this.props.data.filter(friend => friend.id === friendId)[0];
        this.setState({ friend })
    }

    handleChange = (e) => {
        let friend = this.state.friend;
        friend[e.target.name] = e.target.value;
        this.setState({friend})
    }

    handleSubmit = (e) => {
        const {friend} = this.state;
        axios.post('http://localhost:5000/friends', {friend})
          .then(response => console.log(response))
          .catch(error => console.log(`${error}`))
    }

    render() {
        return (
            <form className="form" id="updateFriend">
                <input type="text" placeholder={this.state.friend.name} name="name" onChange={e => this.handleChange(e)}/>
                <input type="number" placeholder={this.state.friend.age} name="age" onChange={e => this.handleChange(e)}/>
                <input type="email" placeholder={this.state.friend.email} name="email" onChange={e => this.handleChange(e)}/>
                <button onSubmit={this.handleSubmit}>Update</button>
            </form>
        );
    }
}

export default FriendUpdate;