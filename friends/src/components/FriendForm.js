import React from 'react';

class FriendForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friendId: 0,
            friendName: '',
            friendAge: '',
            friendEmail: '',
            friendPhone: '',
            friendNotes: '',
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.appState.formUpdating === true && prevProps.appState.formUpdating === false){
            this.setState({
                friendName: this.props.appState.updatingFriend.name,
                friendAge: this.props.appState.updatingFriend.age,
                friendEmail: this.props.appState.updatingFriend.email,
                friendPhone: this.props.appState.updatingFriend.phone,
                friendNotes: this.props.appState.updatingFriend.notes,
            })
        }
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    clearInputs = () => {
        this.setState({
            friendName: '',
            friendAge: '',
            friendEmail: '',
            friendPhone: '',
            friendNotes: ''
        })
    }

    defineFriend = () => {
        return {  
            name: this.state.friendName,
            age: this.state.friendAge,
            email: this.state.friendEmail,
            notes: this.state.friendNotes,
            phone: this.state.friendPhone}
    }

    addFriend = (ev) => {
        ev.preventDefault();
        if(this.state.friendName === ''){
          return alert('At least give your friend a name...');
        }
    
        this.props.addFriend(this.defineFriend());
        this.clearInputs();
      }

    updateFriend = () => {

        this.props.updateFriend(this.defineFriend());
        this.clearInputs();
      }

      deleteFriend = () => {
          this.props.deleteFriend();
          this.clearInputs();
      }

    render() {
        return (
            <form onSubmit={this.props.appState.formUpdating ? this.updateFriend : this.addFriend} className="add-friend-form" >
                <input autocomplete='off' type="text" name="friendName" 
                    placeholder="Name" value={this.state.friendName}
                    onChange={this.handleChange} />
                <input type="text" name="friendAge" 
                    placeholder="Age" value={this.state.friendAge}
                    onChange={this.handleChange} />
                <input type="email" name="friendEmail" 
                    placeholder="Email Address" value={this.state.friendEmail}
                    onChange={this.handleChange} />
                <input type="phone" name="friendPhone" 
                    placeholder="Phone Number" value={this.state.friendPhone}
                    onChange={this.handleChange} />
                <textarea type='textarea' name='friendNotes' 
                    placeholder="notes about friend" value={this.state.friendNotes}
                    onChange={this.handleChange} />
                <input type="submit" style={{display: 'none'}} />
                <div className="add-friend-submit-container">
                    {this.props.appState.formUpdating ? 
                    <>
                    <div className="add-friend-submit" onClick={this.updateFriend}>UPDATE</div>
                    <div className="add-friend-submit delete-warn" onClick={this.deleteFriend}>DELETE</div>
                    </>
                    :
                    (<div className="add-friend-submit" onClick={this.addFriend}>Add Friend</div>)
                    }
                </div>
            </form>
        );
    }

}

export default FriendForm;