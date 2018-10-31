import React from 'react'
import axios from 'axios'
import Delete from './Delete'
import { Link } from 'react-router-dom';

class SingleFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: this.props.friend,
            name: '',
            age: '',
            email: '',
            search: ''

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

    updateHandler = event => {
        this.setState({
            name: event.target.value 
        })
    }



    updateFriend = (props) => {
        const user = {name: this.state.name}
        axios
        .delete(`http://localhost:5000/friends/${props.match.params.id}`)
        .then(resolve =>{
            console.log(resolve)
            console.log(resolve.data)
        })
    }

   
    idArr = [];
    render(){
    return(
        <div>
        <form onSubmit={this.addFriend}>
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
                <button type='submit'>
                    Add Friend
                </button>
                
            </li>
        </ul>
            
            
            
        </form>
          {this.props.friends.map((friend, index) => <div key={index}> 
          
          {this.idArr.push(friend.id)}
          <Link to={`/friends/${friend.id}`}>
              <h1>{friend.name}</h1>  
          </Link>
          
          <h2>{friend.age}</h2>
          <h3>{friend.email}</h3>

          <form onSubmit={this.updateFriend}>
              <input onChange={this.updateHandler} type='text' name='name'/>
              <button type="submit">Delete Friend</button>
          </form>
          
                
          {/* <button onClick={this.removeFriend}>X</button> */}

          </div>)}
        </div>
    )}
}

export default SingleFriend