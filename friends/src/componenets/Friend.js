import React from 'react';
import EditFriend from './EditFriend';

class Friend extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        showEditForm: false
    };
}

toggleForm = () => {
    this.setState({ showEditForm: !this.state.showEditForm });
};

    render() {
    return (
    <div>
    {this.props.friend.name}
    {this.state.showEditForm ? (
    <EditFriend
    friend={this.props.friend}
    editHandler = {() => console.log("")}
    />
    ) : null}
    <button onClick={this.toggleForm}> Show edit form </button>
    </div>
    );
  }
}



export default Friend;