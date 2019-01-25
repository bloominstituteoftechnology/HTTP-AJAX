import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios'
import FriendForm from './FriendForm/FriendForm';

import { FiX } from "react-icons/fi";

class Friend extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            friend : this.props.friends? this.props.friends.find(friend=>`${friend.id}` === this.props.match.params.id):this.props.friend,
            location: this.props.location? this.props.location.pathname.split('/').reverse()[0]:null
        }
    }
    componentDidMount(){
        if(this.state.friend === undefined){
            axios.get(`http://localhost:5000/friends/${this.props.match.params.id}`)
            .then(result=>{
                console.log(result.data)
                this.setState({friend:result.data})
            }).catch(error=>console.log(error))
        }
    }
   
    render(){ 
        const {friend} = this.state;
        return friend === undefined ? <div>Loading</div>:( 
            <div>
                <div>
                    <h3>{friend.name}</h3>
                    <FiX onClick={()=>{
                        this.props.deleteFriend(friend.id)
                    }}/>
                </div>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                {this.state.location==='update'?null:<Link to={`/friends/${friend.id}/update`}>Update</Link>}
            </div>
         );
   
    }
    
}
 
export default Friend;