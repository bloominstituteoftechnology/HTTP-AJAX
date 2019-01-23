import React from "react";
import "./fr.css"

class Friend extends React.Component{
    constructor(props) {
        super(props)
    }


    render(){

        return  (
            <div className="friendList">
                <div className="friend"> {this.props.friend.name}</div>
                <div className="friend">{this.props.friend.age}</div>
                <div className="friend">{this.props.friend.email}</div>
                <button onClick={this.deleteFriend}>Delete</button>
            </div>

        )


    }





}

export default Friend