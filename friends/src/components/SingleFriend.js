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

    // deleteFriend = (props, event) => {
    //     event.preventDefault()
    //     axios
    //     .delete(`http://localhost:5000/friends/${props.match.params.id}`)
    //     .then(response =>{
    //         this.setState({
    //             friends: response.data
    //         })
    //     })
       
        
    // }

   
    // idArr = [];
    render(props){
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
          
          {/* {this.idArr.push(friend.id)} */}
              <h1>{friend.name}</h1>  
          
          <h2>{friend.age}</h2>
          <h3>{friend.email}</h3>
          <form>
              <input onChange={this.changeHandler} type='text' name='search'/>
              <button name='search' onClick={this.props.deleter(friend.id)} type="submit">Delete Friend</button>
          </form>
          </div>)}
        </div>
    )}
}

export default SingleFriend