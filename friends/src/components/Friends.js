import React, {Component} from 'react';
import axios from 'axios';

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
                this.setState = {
                    friends: response.data
                }
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                A list of Friends
            </div>
        )
    }
}

export default Friends