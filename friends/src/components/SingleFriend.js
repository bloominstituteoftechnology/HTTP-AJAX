import React from 'react'
import axios from 'axios'

class SingleFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: this.props.friend,
            name: '',
            age: '',
            email: ''

        }
    }

    componentDidMount(){
        axios
            .get('http://localhost:5000/friends')
            .then(data => {
                this.setState({
                    friends: data
                })
            })
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }

    addFriend = () => {
        const friendObj = {name: this.state.name, age: this.state.age, email: this.state.email}
        axios
        .post('http://localhost:5000/friends', friendObj)
        .then(friendObj => {
            console.log(friendObj)
        })
        .catch(err => {
            console.log(err)
        })

    }
    render(){
    return(
        <div>
        <form  method="post">
        <ul>
            <li>
            <h4>Name:</h4>
                <input 
                type='text'
                onChange={this.changeHandler} 
                name='name' 
                value={this.state.name} />
            </li>
            <li>
            <h4>Age:</h4>
                <input 
                onChange={this.changeHandler}
                type='text' 
                name='age' 
                value={this.state.age} />
            </li>
            <li>
            <h4>Email:</h4>
                <input onChange={this.changeHandler} 
                type='text' 
                name='email' 
                value={this.state.email} />
            </li>
            <li>
            
                <button onClick={this.addFriend} >
                    Add Friend
                </button>
            </li>
        </ul>
            
            
            
        </form>
          {this.props.friends.map((friend, index) => <div key={index}> 
          
          <h1>{friend.name}</h1>
          <h2>{friend.age}</h2>
          <h3>{friend.email}</h3>
          
          </div>)}
        </div>
    )}
}

export default SingleFriend