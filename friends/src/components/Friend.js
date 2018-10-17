import React, { Component } from 'react';
import {Spring, Transition, animated} from 'react-spring';
import axios from 'axios';
import FriendCard from './FriendCard';


export default class Friend extends React.Component {
    state ={
        friend: {},
        mutate: false

    }

    mutate = () => {
        this.setState({mutate: !this.state.mutate})
    }
componentDidMount(){
    let id = this.props.match.params.id;
    console.log(id);
    axios.get('http://localhost:5000/friends').then(response => { 
       
        let newId = response.data.filter(friend => 1 === friend.id);
        return newId;
        }).then(response => {
            console.log('Response2',response)
            this.setState({friend: response[0]})
        })
}
   render(){ 
       console.log(this.state.friend);

    if (!this.state.friend) {
        return <div>Loading friend information...</div>;
      }
return (
        <div>
    <FriendCard friend={this.state.friend} />
    <div className="here" onClick={this.mutate}>MUTATE NOW</div>
    {this.state.mutate ? <Form submitFriend={this.props.submitFriend} formType={this.props.formType}/> : null}
  </div>
    )
}
}

