import React, {Component} from 'react';
import axios from 'axios';
import Friend from "./Friend"

class Friends extends Component{
    constructor(){
        super()
        this.state= {
            friends: []
        }
    }

    componentDidMount(){
        axios
            .get('http://localhost:5000/friends')
            .then(response =>{
                console.log(response.data)
                this.setState({
                    friends: response.data
                })
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                {this.state.friends.map(item => {
                    return (<Friend key={item.id} friend={item}/>)
                })}
            </div>
        )
    }
}

export default Friends