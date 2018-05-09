import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend'
import { Table } from 'reactstrap';



class Friends extends Component {
    constructor() {
        super();
        this.state = {
            friends: [], 
            newFriend: {},
            name: "",
            age: "",
            email: ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/friends")
            .then((response => this.setState({friends: response.data})))
            .catch((err) => console.log(err))
    }


    handleFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
    // this.setState({newFriend: newFriend.name = this.state.newFriend.name})
        const newObj = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        let newFriend = Object.assign({}, newObj) 
        this.setState({newFriend})
        // console.log(this.state.newFriend)
    }

    handleSubmitFriend = () => {
        axios.post('http://localhost:5000/friends', this.state.newFriend)      
    }

    render() {
        const headerStyle = {
            color: "blue",
            display: "flex",
            justifyContent: "space-around",
            paddingRight: "80px",
            margin: "30px 0px",
            fontWeight: "bold"
        }

        const formStyle = {
            margin: "20px"
        }

        return (
            <div>
                <form style={formStyle} >
                    <input onChange={this.handleFormChange} type="text" placeholder="Name" name="name" value={this.state.name} style={formStyle}></input>
                    <input onChange={this.handleFormChange} type="text" placeholder="Age" name="age" value={this.state.age} style={formStyle}></input>
                    <input onChange={this.handleFormChange} type="text" placeholder="Email" name="email" value={this.state.email} style={formStyle}></input>
                    <button onClick={this.handleSubmitFriend}>Submit</button>
                </form>
                <div style={headerStyle}>
                    <div>Name</div>
                    <div>Age</div>
                    <div>Email</div>
                </div>
                {this.state.friends.map((friend, index) => { return <Friend key={friend.name + index} friend={friend}/>})}
            </div>
        )
    }
}



export default Friends;