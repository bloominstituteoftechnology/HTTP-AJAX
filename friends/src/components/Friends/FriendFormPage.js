import React, { Component } from 'react';
import FriendForm from './FriendForm';
import FriendFormError from './FriendFormError';

class FriendsFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: ''
    };
  }

  componentDidMount() {
    switch(this.props.formType) {
      case 'update':
        this.setState({formTitle: 'Update Friend'});
        break;
      case 'delete':
        this.setState({formTitle: 'Delete Friend'});
        break;
      default: 
        this.setState({formTitle: 'Add a Friend'});
    }
  }

  render() {
    let friendForm, isIdValid = false, allFriends;
    if (this.props.friends) {
      allFriends = this.props.friends.slice();
      allFriends = allFriends.filter(friend => friend.id === Number(this.props.match.params.friendID));
      if (allFriends.length > 0) {
        isIdValid = true;
      }
    } else {
      isIdValid = true;
    }
    
    if (isIdValid) {
      friendForm = <FriendForm formType={this.props.formType} onSubmitFriend={this.props.onSubmitFriend} friends={this.props.friends} match={this.props.match} />;
    } else {
      friendForm = <FriendFormError />;
    }

    return(
      <div id="friendFormPage">
        <h2>{this.state.formTitle}</h2>
        {friendForm}
      </div>
    )
  }
}

export default FriendsFormPage;
