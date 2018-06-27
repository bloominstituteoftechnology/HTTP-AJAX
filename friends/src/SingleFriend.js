import React from 'react';
import EditFriend from './EditFriend';

class SingleFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showEditForm: false,
            editFriend: ''
        }
    }
    render(){
        console.log('single friend: ', this.props.friendItem)
        return (
            <div className='cardWrapper'>
                <p>{this.props.friendItem.name}</p>
                <p>{this.props.friendItem.age}</p>
                <p>{this.props.friendItem.email}</p>
                <EditFriend
                    submitEdits={this.saveEdit}
                    friend={this.props.friendItem}
                    editHandler={this.editHandler}
                />
    
            </div>
        )
    }

}
 
export default SingleFriend;