import React from 'react'
import './Friends.css'
import axios from 'axios'
class Friends extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'',
            age:'',
            email:'',
        }
    }
    updateFriendList = res => {
        this.setState({
            friends: res,
        })
    }
    updateFriend = event => {
        axios.put(`http://localhost:5000/friends/${this.props.friend.id}`,{
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err));
        this.setState({ age: '',email: '', age:'' })
    }
    nameHandler = event => {
        this.setState({
            name: event.target.value,
        })
    }
    ageHandler = event => {
        this.setState({
            age: event.target.value,
        })
    }
    emailHandler = event => {
        this.setState({
            email: event.target.value,
        })
    }

    render(){
        const id = this.props.friend.id;
        return (
            <div className='friend-card'>
                <div >
                    <h2>{this.props.friend.name}</h2>
                    <p>age: {this.props.friend.age}</p>
                    <p>email: {this.props.friend.email}</p>
                </div>
                <form onSubmit = {this.updateFriend}>
                    <h3>update friend</h3>
                    <input
                    value = {this.state.name}
                    onChange = {this.nameHandler}
                    placeholder = 'update name'
                    />
                    <input
                        value={this.state.age}
                        onChange = {this.ageHandler}                
                        placeholder = 'update age'
                    />
                    <input
                        value= {this.state.email}
                        onChange = {this.emailHandler}
                        placeholder='update email'
                    />
                    <button>Update</button>
                </form>
                <button className='close' onClick={this.props.delete(id)}>X</button>
            </div>
        )
    }

}


export default Friends