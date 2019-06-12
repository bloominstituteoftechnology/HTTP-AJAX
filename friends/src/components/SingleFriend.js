import React from 'react'
import axios from 'axios'
// import FriendProfile from './FriendProfile'
import { Link } from 'react-router-dom';


class SingleFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: this.props.friend,
            name: '',
            age: '',
            email: '',
            search: '',
            newname: '',
            newage: '',
            newemail: ''

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


    updateFriend= (props) => {
        const updatedFriend = {
             name: this.state.newname,
             age: this.state.newage,
             email: this.state.newemail
         }
         const id = props.id
         console.log(id)
             axios
             .put(`http://localhost:5000/friends/${id}`, updatedFriend)
             .then((resolve) => {
                 this.setState({
                     friends: resolve.data 
                 })
             console.log(resolve)
             })
             .catch(err => {
                 console.log(err)
             })
         };
    // idArr = [];
    render(props){
    return(
        <div>
        {/* <FriendProfile friends={this.props.friends} 
        id={this.props.id} 
        match={this.props.match} 
        changeHandler={this.changeHandler} /> */}
        <form onSubmit={this.addFriend}>
        <ul>
            <li>
            <h4>Name:</h4>
          
                <input 
                type='text'
                onChange={this.changeHandler} 
                name='name' 
                placeholder="add new name..."
                value={this.state.name} />
                <li>
                <h4>Update Name:</h4>
                   <input 
                type='text'
                placeholder="update name here.."
                onChange={this.changeHandler} 
                name='newname' 
                value={this.state.newname} />  
                </li>
            </li>
            <li>
            <h4>Age:</h4>
                <input 
                onChange={this.changeHandler}
                type='text' 
                name='age' 
                placeholder="add new age..."
                value={this.state.age} />
                <li>
                     <h4>Update Age:</h4> <input 
                type='text'
                placeholder="update age here.."
                onChange={this.changeHandler} 
                name='newage' 
                value={this.state.newage} /> 
                </li>
              
            </li>
            <li>
            <h4>Email:</h4>
                <input onChange={this.changeHandler} 
                type='text' 
                placeholder="add new email..."
                name='email' 
                value={this.state.email} />
                <li>
                <h4>Update Email:</h4>
                    <input 
                type='text'
                placeholder="update email here.."
                onChange={this.changeHandler} 
                name='newemail' 
                value={this.state.newemail} /> 
                </li>
                
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
              <button onClick={() => this.updateFriend(friend.id)}>Update Friend</button>
              
          </form>
          </div>)}
        </div>
    )}
}

export default SingleFriend