import React, {Component} from 'react'
import Friend from './Friend'
import './App.css'
class Friends extends Component {
    constructor(props) {
        super();
        this.state = {}
    }
    render() {
    let SortedFriends = this.props.friends.sort(function(a,b) {return (a.name > b.name)})

    return(
<div>
{SortedFriends.map(friend => {return (<div className='Info'> <Friend friend={friend} /> </div>)})}
</div>
    )
}
}


export default Friends