import React from 'react';
import EditForm from './EditForm';

class FriendCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        const properCaseName = this.props.data.name.charAt(0).toUpperCase() + this.props.data.name.slice(1);
        return(
            <div className='individual-friend'>
                <button
                    className='delete-button'
                    onClick={() => this.props.deleteFriend(this.props.data.id)}
                >
                    <i class="fas fa-times"></i>
                </button>
                <i className="fas fa-user"></i>
                <p className='friend-name'>
                    {properCaseName}, <span className='friend-age'>{this.props.data.age}</span></p>
                <p className='friend-email'>{this.props.data.email.toLowerCase()}</p>
                <button onClick={this.beginEdit} className='edit-button'>
                    {this.state.shouldEdit ? 'Close' : 'Edit'}
                </button>
                <EditForm 
                    data={this.props.data}
                    id={this.props.data.id}
                    shouldEdit={this.state.shouldEdit}
                    updateFriend={this.props.updateFriend}
                />
            </div>
        );
    }
}

export default FriendCard;