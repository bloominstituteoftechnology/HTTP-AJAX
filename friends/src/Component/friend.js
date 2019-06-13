/* eslint-disable no-unused-expressions */
import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Friend extends React.Component {
    constructor(props){
        super(props)
        this.state=({
            friend:{},
            updated:false
        })
        console.log(this.props.location)
    }
    componentDidMount(){
        this.getFriend(this.props.match.params.id ) 
    }
  
    getFriend = async (id) =>{
        await this.props.get()
        const newFriend = this.props.data.find(friend => friend.id +'' === id)
        this.setState({
            friend:newFriend
        })
        }
    
    deleteFriend =(id) =>{
        this.props.delete(id)
        // eslint-disable-next-line no-restricted-globals
        this.props.history.push({pathname:'/'
        })
       
    }
    render(){
        return(
            <div>
            <h2>{this.state.friend.name}</h2>
            <p> {this.state.friend.age}</p>
            <p>{this.state.friend.email}</p>
            <NavLink to={`/${this.state.friend.id}/update`}>
            Update Friend
          </NavLink>
            <button 
            onClick={()=>this.deleteFriend(this.props.match.params.id)}>Delete</button>
            </div>
            )
    }
}
