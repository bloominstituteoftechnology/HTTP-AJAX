import React from 'react';
import axois from  'axios';
import Form from './form';
import Friend from './friend'
import {NavLink, Route} from 'react-router-dom';

export default class FriendList extends React.Component{
state={
    friends:null,
    errorMessage:'',
    newName:'',
    newAge:'',
    newEmail:'',
}
getFriends = async () =>{
    try{
        const axoisData = await axois.get('http:localhost:5000/api/friends')
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
        await axois.post('http:localhost:5000/api/friends',this.state.newFriend)
        }
    catch(err){
        this.setState({
            errorMessage:err.message
        })
    }
}
updateFriend = async(id) =>{
    try{
        await axois.patch(`http:localhost;5000/api/friends/${id}`, this.state.newFriend)
    }
    catch(err){
        this.setState({
            errorMessage:err.message
        })
    }
}
deleteFriend = async(id) => {
    try{
        await axois.delete(`http:localhost:5000/api/friends/${id}`)
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
componentDidUpdate(){
    this.getFriends()
}
render(){
    return(
        <div>
        <h1>FriendList</h1>
        {this.state.friends.map(friend => {
            // eslint-disable-next-line no-unused-expressions
            <div>
            <NavLink key={friend.id} to={`/api/friends/${friend.id}`}>{friend.name}</NavLink>
            <Route path='/api/friends/:id' 
            render ={props =>
                <Friend update={this.updateFriend} {...props}/>}
            />
            <button onClick={this.updateFriend}>Update</button>
            <button onClick={this.deleteFriend}>Delete</button>
            <Form inputValue ={this.onChangeHandler} delete={this.onChangeHandler} submit={this.postFriend}/>
            </div>
        })}
        </div>
    )
}
}
