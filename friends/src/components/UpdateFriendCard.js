import React from 'react';
import {Link} from 'react-router-dom';

class UpdateFriendCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: undefined,
            email: ''
        }
    }

    changeName = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    changeAge = (event)=>{
        this.setState({
            age: event.target.value
        })
    }

    changeEmail = (event)=>{
        this.setState({
            email: event.target.value
        })
    }

    updateFriend = ()=>{
        this.props.updateFriend(
            this.props.friend.id,
            {
                name: this.state.name ? this.state.name : this.props.friend.name,
                age: this.state.age ? this.state.age : this.props.friend.age,
                email: this.state.email ? this.state.email : this.props.friend.email
            }
        )
    }

    render(){
        if(this.props.friend === undefined){
            return <div>Loading friend data...</div>;
        }
        return(
            <div>
                <input onChange={this.changeName} type="text" placeholder={this.props.friend.name} value={this.state.name}/>
                <input onChange={this.changeAge} type="number" placeholder={this.props.friend.age}/>
                <input onChange={this.changeEmail} type="email" placeholder={this.props.friend.email} value={this.state.email}/>
                <Link to={`/${this.props.friend.id}`} onClick={this.updateFriend}>Update</Link>
            </div>
        )
    }
}

export default UpdateFriendCard;