import React from 'react';
import EditFriendForm from './EditFriend';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditForm: false
        }
        //toggleForm = () => {
          //  this.setState({ showEditForm: !this.state.showEditForm })
        // };
        
    }
    render(){
    return (
        <div>
        {this.props.friend.name}
        {this.state.showEditForm ? (
        <EditFriendForm 
        friend={this.props.friend}
         editHandler={() => console.log("") } 
         />
        ) : null}
        </div>
    );
}
};



export default Friend;
