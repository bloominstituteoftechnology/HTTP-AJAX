import React from 'react';

class FriendForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <form onSubmit={this.props.appState.formUpdating ? this.props.updateFriend : this.props.addFriend} className="add-friend-form" >
                <input autocomplete='off' type="text" name="friendName" 
                    placeholder="Friend Name" value={this.props.appState.friendName}
                    onChange={this.props.handleChange} />
                <input type="text" name="friendAge" 
                    placeholder="Friend Age" value={this.props.appState.friendAge}
                    onChange={this.props.handleChange} />
                <input type="email" name="friendEmail" 
                    placeholder="Email Address" value={this.props.appState.friendEmail}
                    onChange={this.props.handleChange} />
                <input type="phone" name="friendPhone" 
                    placeholder="Phone Number" value={this.props.appState.friendPhone}
                    onChange={this.props.handleChange} />
                <textarea type='textarea' name='friendNotes' 
                    placeholder="notes about friend" value={this.props.appState.friendNotes}
                    onChange={this.props.handleChange} />
                <input type="submit" style={{display: 'none'}} />
                <div className="add-friend-submit-container">
                    {this.props.appState.formUpdating ? 
                    <>
                    <div className="add-friend-submit" onClick={this.props.updateFriend}>UPDATE</div>
                    <div className="add-friend-submit delete-warn" onClick={this.props.deleteFriend}>DELETE</div>
                    </>
                    :
                    (<div className="add-friend-submit" onClick={this.props.addFriend}>Add Friend</div>)
                    }
                </div>
          </form>
        );
    }

}

export default FriendForm;