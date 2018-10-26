import React, {Component} from 'react'
import Friend from './Friend'
import './App.css'
class Friends extends Component {
    constructor(props) {
        super();
        this.state = {}
    }
    render() {
        let sorted = this.props.sort;
    let SortedFriends = this.props.friends.sort(function(a,b) {return (a[`${sorted}`] > b[`${sorted}`])})

    return(
<div>
{SortedFriends.map(friend => {return (<div className='Info' onClick={this.props.clickHandler} key={this.props.friends.indexOf(friend)}> <Friend friend={friend}/> </div>)})}
</div>
    )
}
}


export default Friends