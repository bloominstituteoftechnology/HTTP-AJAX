import React, {Component} from "react";

class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: "",
        }
    }

    render(){
    return (
        <div>
            {this.props.friend.name} 
            {this.props.friend.age} 
            {this.props.friend.email} 

        </div>
    )
}
}
export default Friends;