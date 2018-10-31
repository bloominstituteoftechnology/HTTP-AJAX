import React from 'react'
import { Browser as Router, Link, NavLink, Route, Component } from 'react-router-dom'
import axios from 'axios'
import SingleFriend from './SingleFriend'

class Friends extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends:[],
            ids: []
            
        }
    }

     
    // idGrab = () => {
    //     this.state.friends.map((friend) => {  return this.idArr.push(friend.id)};
    // idGrab = () => {
    //     let idArr = Object.assign([], this.state.ids)
    //     this.state.friends.map((friend) => {
    //        idArr.push(friend.id)
    //         this.setState({
    //              ids: idArr
    //         })
    //         return idArr;
    //     }
    //         )
    // }

    

    
    render(props){
        return(
            <div>
               <SingleFriend match={this.props.match} friends={this.props.friends} /> 
            
            </div>
        )
    }
}

export default Friends ;