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

    addFriend = event => {
        event.preventDefault()
        const friendObj = {name: this.state.name, age: this.state.age, email: this.state.email}
        axios
        .post('http://localhost:5000/friends', friendObj)
        // .post('friend', friendObj)
        .then(friendObj => {
            console.log(friendObj)
        })
        .catch(err => {
            console.log(err)
        })
        this.setState({
            name: '', age: '', email: ''
        })

    }

    removeFriend(friend) {
        friend = this.friend.id ;
        const friends = Object.assign([], this.state.friends.slice ) ;
        axios
        .delete(`http://localhost:5000/friends/${friend}`)
        .then((resolve) =>{
        console.log(resolve)
        this.setState({
            friends: friends
        })}
        )
    }
    render(){
    return(
        <div>
        <form onSubmit={this.addFriend}>
        <ul>
            <li>
            <h4>Name:</h4>
            <button onClick={this.removeFriend}>X</button>
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
                <button type='submit'>
                    Add Friend
                </button>
                <button  type="submit">Delete Friend</button>
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