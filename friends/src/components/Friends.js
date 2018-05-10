import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend'
import { Table } from 'reactstrap';
import './Friends.css'



class Friends extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            name: "",
            age: "",
            email: ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/friends")
            .then((response => this.setState({ friends: response.data })))
            .catch((err) => this.setState({ errCode: err }))
    }


    handleFormChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitFriend = () => { 
        const newFriend = {  
            name: this.state.name,
            age: this.state.age,
            email: this.state.email 
        }
       
        axios.post("http://localhost:5000/friends", newFriend) 
            .then((res) => { console.log(res.data)})
            .catch((err) => {console.log(err)})
        this.setState({ name: "", age: "", email: "" })  
    }

    render() {
        const headerStyle = {
            color: "blue",
            display: "flex",
            justifyContent: "space-around",
            paddingRight: "80px",
            margin: "30px 0px",
            fontWeight: "bold",
            fontSize: "25px"
        }

        const formStyle = {
            margin: "20px",
        }

        const mainStyle = {
            width: "75%",
            margin: "0 auto"
        }

        return (
            //    (this.state.friends.length > 0)  HOW TO ADD CONDITIONAL LOGIC
            <div style={mainStyle}>
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
                <div>
                    {this.state.friends.map((friend, index) => { return <Friend key={friend.name + index} friend={friend} /> })}
                </div>
            </div>
        )
    }
}



export default Friends;