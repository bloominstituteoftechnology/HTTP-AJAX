import React from 'react';
import EditFriend from './EditFriend';

class SingleFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showEditForm: false,
            editFriend: '',
            name: '',
            age: '',
            email: '',
        }
    }

    toggleForm=()=>{
        this.setState({ showEditForm: !this.state.showEditForm})
    }

    render(){
        console.log('single friend: ', this.props.friendItem)
        return (
            <div className='cardWrapper'>
                <p>{this.props.friendItem.name}</p>
                <p>{this.props.friendItem.age}</p>
                <p>{this.props.friendItem.email}</p>
                {this.state.showEditForm ? (
                    <EditFriend
                    submitEdits={this.saveEdit}
                    friend={this.props.friendItem}
                    editHandler={this.editHandler}
                    stateProp = {this.state}
                    />
                    ) : null}
                    <button onClick={this.toggleForm}> Edit </button>
                
                
    
            </div>
        )
    }

}
 
export default SingleFriend;