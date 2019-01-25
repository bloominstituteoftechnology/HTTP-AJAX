import React, { Component } from 'react';

class FriendForm extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.edit ? (this.props.edit(this.props.id)):(this.props.addFriend)}>
                    <input type="text" name="name" placeholder="name" value={this.props.name} onChange={this.props.typed} />
                    <input type="text" name="age" placeholder="age" value={this.props.age} onChange={this.props.typed}/>
                    <input type="text" name="email" placeholder="email" value={this.props.email} onChange={this.props.typed}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FriendForm;


