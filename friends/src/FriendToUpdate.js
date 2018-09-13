import React from 'react';

class FriendToUpdate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // friend: this.props.friends.map(friend => {if(friend.id === props.match.params.id){return friend}})
            // find(friend => friend.id === props.match.params.id)
        }
    }

    handleInput = event => {
        event.preventDefault();
        console.log(this.props.friends.id);
        console.log(event.target.name);
        // if(event.target.name === 'age') {
        //     this.setState({
        //         age: Number(event.target.value)
        // })} else if (event.target.name === 'name'){
        //         this.setState({
        //             name: event.target.value
        //     })} else {
        //            this.setState({
        //                 email: event.target.value
        //     }) 
                
            
        // }
    }

    render() {
        return (
            <div>
                <li>Hi</li>
            </div>
            
        )
    } 
}

export default FriendToUpdate;