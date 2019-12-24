import React from 'react';
import axios from 'axios';
import './FriendStyle.css'

export default class PersonList extends React.Component{
    state={
        persons:[],
    };
    componentDidMount(){
        axios.get('http://localhost:5000/friends')
            .then(response=>{
                console.log(response)
                this.setState({persons:response.data})
            })
      }
      render() {
        return (
        <div className="whole-list">
            <span className="title">Your Friends List</span>
             {this.state.persons.map(person=>
                                <div className="friends">
                                    <span>{person.name}</span>
                                    <span>{person.age}</span>
                                    <span>{person.email}</span>
                                </div>)}
        </div>
        );
      }
};
