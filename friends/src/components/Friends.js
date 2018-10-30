import React from 'react'
import { Browser as Router, Link, NavLink, Route, Component } from 'react-router-dom'
import axios from 'axios'
import SingleFriend from './SingleFriend'

class Friends extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends:[]
        }
    }

    render(){
        return(
            <div>
            
            {/* {this.state.friends.map((friend, index) => <SingleFriend key={friend.id} friend={friend}/>)} */}
            <SingleFriend friends={this.props.friends} />
            </div>
        )
    }
}

export default Friends ;