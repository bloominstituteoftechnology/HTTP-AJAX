import React from 'react';

class FriendToUpdate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            friend: this.props.friends.find(friend => {
                return friend.id == props.match.params.id
            })
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
        // })} 
        //    else if (event.target.name === 'name'){
        //         this.setState({
        //             name: event.target.value
        //     })} else {
        //            this.setState({
        //                 email: event.target.value
        //     })}
    }

    render() {
        return (
            <div>
                <form action="" >
                    Name: <input type="text" name="name" placeholder={this.state.friend.name} onChange={this.handleInput}/>
                    Age: <input type="text" name="age" placeholder={this.state.friend.age} onChange={this.handleInput}/>
                    Email: <input type="text" name="email" placeholder={this.state.friend.email} onChange={this.handleInput}/>
                    <input type="submit" value="Submit" onClick={this.formHandler}/>
                </form>    
            </div>
        )
    } 
}

export default FriendToUpdate;