import React from 'react';
import axois from  'axois';

export default class FriendList extends React.Component{
state={
    friend:null,
    errorMessage:'',
    newFriend:{},
}
getFriends = async () =>{
    try{
        const axoisData = await axois.get('http:localhost:5000/api/friends')
        this.setState({ friend: axoisData.data });
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
        return this.getFriends;
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
        return this.getFriends
    }
    catch(err){
        this.setState({
            errorMessage:err.message
        })
    }
    }
}
deleteFriend = async(id) => {
    try{
        await axois.delete(`http:localhost:5000/api/friends/${id}`)
        return this.getFriends;
    }
    catch(err){
        this.setState({
            errorMessage:err.message
        })
    }
}

}
