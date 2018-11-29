import React from 'react';
import EditForm from './EditForm';

class  FriendCard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            shouldEdit: false,
        }
    }

    beginEdit = () => {
        if (!this.state.shouldEdit) {
            this.setState({ shouldEdit: true });
        } else {
            this.setState({ shouldEdit: false });
        }
      }

      handleEdit = event => {
          event.preventDefault();
          this.props.updateFriend(this.props.data.id);
      }

    render() {
        return(
            <div className='individual-friend'>
                <button
                    className='delete-button'
                    onClick={() => this.props.deleteFriend(this.props.data.id)}
                >
                    X
                </button>
                <i className="fas fa-user"></i>
                <p className='friend-name'>{this.props.data.name}, <span className='friend-age'>{this.props.data.age}</span></p>
                <p className='friend-email'>{this.props.data.email}</p>
                <button onClick={this.beginEdit} className='edit-button'>
                    {this.state.shouldEdit ? 'Close' : 'Edit'}
                </button>
                <EditForm 
                    data={this.props}
                    shouldEdit={this.state.shouldEdit}
                    handleEdit={this.handleEdit}
                    handleChange={this.props.handleChange}
                />
            </div>
        );
    }
}

export default FriendCard;