import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios'
import FriendForm from './FriendForm/FriendForm';

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
        // if(this.state.friend === undefined)
        //     this.props.getFriendsData();
    }
   
    // a bug I'm having is that if I go directly to this route I don't have the information for this component
    // how do I handle something like this?

    //I handled this by adding a route in the server API for a single friend and turned this into a stateful component
    // I'm not sure if this is the best way to do it
    render(){ 
        // I don't know why but I think this is a really funny way of getting the last path route
        const {friend} = this.state;
        return friend === undefined ? <div>Loading</div>:( 
            <div>
                <h3>{friend.name}</h3>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                {this.state.location==='update'?null:<Link to={`/friends/${friend.id}/update`}>Update</Link>}
                <Route exact path="/friends/:id/update" render={props=> <FriendForm {...props} /> } />
            </div>
         );
   
    }
    
}
 
export default Friend;