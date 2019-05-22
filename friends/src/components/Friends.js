import React, {Component} from 'react';
import axios from 'axios';
import Friend from './Friend';

class Friends extends Component {
    constructor(props){
        super(props);

        this.state={
            friends:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends').then(response => {
            this.setState({friends:response.data})
        })
    }
    render() {
        return(
            <div className = 'Friends'>\
            {this.state.friends.map(friend => <Friend key={friend.name+friend.id} friend = {friend}/>)}
            </div>
            )
    }
}
 export default Friends