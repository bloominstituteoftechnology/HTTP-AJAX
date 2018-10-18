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
    handleDelete = id => {
        this.props.handleDelete(id);
    }

    




    render(){
    return (
        <div>
            {this.props.friend.name} 
            {this.props.friend.age} 
            {this.props.friend.email} 

            <button onClick ={() => this.handleDelete(this.props.friend.id)}> 
                Delete
            </button>

        </div>
    )
}
}
export default Friends;