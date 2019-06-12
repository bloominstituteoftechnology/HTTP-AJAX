import React from 'react';
import axios from  'axios';
import Form from './form';
import Friend from './friend'
import {NavLink, Route} from 'react-router-dom';

export default class FriendList extends React.Component{
state={
    friends:[],
    errorMessage:'',
    newName:'',
    newAge:'',
    newEmail:'',
}
getFriends = async () =>{
    try{
        const axoisData = await axios.get('http://localhost:5000/friends')
        this.setState({ friends: axoisData.data });
    }
    catch(err){
        this.setState({
            errorMessage:err.message
        })
    }
}
postFriend = async() => {
    try{
        await axios.post('http://localhost:5000/friends',this.state.newFriend)
        return this.getFriends()
        }
    catch(err){
        this.setState({
            errorMessage:err.message
        })
    }
}
updateFriend = async(id) =>{
    try{
        await axios.put(`http://localhost:5000/friends/${id}`, this.state.newFriend)
        return this.getFriends()
    }
    catch(err){
        this.setState({
            errorMessage:err.message
        })
    }
}
deleteFriend = async(id) => {
    try{
        await axios.delete(`http://localhost:5000/friends/${id}`)
        return this.getFriends()
    }
    catch(err){
        this.setState({
            errorMessage:err.message
        })
    }
}
onChangeHandler =(e, text) =>{
(text === 'name') && this.setState({newName: e});
(text === 'age') && this.setState({newAge: e});
(text === 'email') && this.setState({newEmail: e});
}

componentDidMount(){
    this.getFriends()
}

render(){
    return(
        <div>
        <h1>FriendList</h1>
        {this.state.friends.map(friend => {
            // eslint-disable-next-line no-unused-expressions
            return (<div key={`${friend.id}${friend.name}`}>
            <NavLink to={`/friends/${friend.id}`}>{friend.name}</NavLink>
            <Route path='/friends/:id' 
            render ={props =>
                <Friend update={this.updateFriend} {...props}/>}
            />
            <button onClick={()=>this.updateFriend(friend.id)}>Update</button>
            <button onClick={()=>this.deleteFriend(friend.id)}>Delete</button>
            <Form inputValue ={this.onChangeHandler} delete={this.onChangeHandler} submit={this.postFriend}/>
            </div>
        )})}
        </div>
    )
}
}
