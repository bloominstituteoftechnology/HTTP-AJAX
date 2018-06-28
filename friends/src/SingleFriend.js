import React from 'react';
import EditFriend from './EditFriend';
import axios from 'axios';

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

    editHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    saveEdit = e => {
        e.preventDefault();
        let { id } = this.props.friendItem;
        const friendObj ={
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };
        axios 
            .put(`http://localhost:5000/friends/${id}`, friendObj)
            .then(response =>{
                console.log('save edit response: ', response);
                this.props.handleSetData(response.data)
                .then(() => this.setState({ name: '', age: '', email: ''}))
            })
            .catch(error => console.log(error));
    }

    deleteFriend=id=>{
        console.log('id delete: ', id);
        axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(res => this.props.handleSetData(res.data))
        .catch(err => {
            console.log(err)
        })
    }

    toggleForm=()=>{
        this.setState({ showEditForm: !this.state.showEditForm})
    }

    render(){
        console.log('single friend: ', this.props)
        console.log('single friend id: ', this.props.friendItem.id)
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
                    // goHome = {this.resetButton}
                    />
                    ) : null}
                    <div className='buttonArea'>
                        <button onClick={this.toggleForm}> Edit </button>
                        <button onClick={() => this.deleteFriend(this.props.friendItem.id)}>Delete {this.props.friendItem.name}</button>
                    </div>
                
    
            </div>
        )
    }

}
 
export default SingleFriend;