import React from 'react';
import axios from 'axios';

class Friend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showEditForm: false,
            friendEdit:{
                name: '',
                age: '',
                email: ''
            },

            blankEdit:{
                name: '',
                age: '',
                email: ''
            }
        }
    }
    toggleEdit = () => {
        this.setState({ showEditForm: !this.state.showEditForm });
    }

    handleSaveSubmit = () => {
        const nufriend = this.state.friendEdit;
        const blankFriend = this.state.blankFriend; 
        axios
          .put(`http://localhost:5000/friends/${this.props.friend.id}`, nufriend)
          .then(response => {
            this.props.handleSetData(response.data);
          })
          .catch(error => console.log(error));
      };

    handleEditName = e => {
        let nufriend = {...this.state.friendEdit};
        nufriend.name = e.target.value;
        this.setState({friendEdit:nufriend});
      };
    
      handleEditAge = e => {
        let nufriend = {...this.state.friendEdit};
        nufriend.age = e.target.value;
        this.setState({friendEdit:nufriend});
      };
    
      handleEditEmail = e => {
        let nufriend = {...this.state.friendEdit};
        nufriend.email = e.target.value;
        this.setState({friendEdit:nufriend});
      };

    render() {
        return(
        <div>
            {this.props.friend.name} Age: {this.props.friend.age} Email: {this.props.friend.email}
            {this.state.showEditForm ? (
                <div>
                <input
                    placeholder={this.props.friend.name}
                    type="text"
                    onChange={this.handleEditName}
                />
                <input
                    placeholder={this.props.friend.age}
                    type="text"
                    onChange={this.handleEditAge}
                />
                <input
                    placeholder={this.props.friend.email}
                    type="text"
                    onChange={this.handleEditEmail}
                />
                <button onClick={this.handleSaveSubmit}> Save </button>
                </div>
            ): null}
            &nbsp; <button onClick={this.toggleEdit}>Edit</button>
            <button> Delete </button>
        </div>
        )
    }
}

export default Friend;