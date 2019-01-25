import React from "react";

class UpdateFriendComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendInfo: {
                name: '',
                age: '',
                email: ''
            }
        };
    }

    handleChange = e => {
        this.setState({
            friendInfo: {
        ...this.state.friendInfo,
        [e.target.name]: e.target.value
            }
        });
    };

    updateFriend = e => {
        e.preventDefault();
        this.props.updateFriend(this.state.friendInfo);
    }


  render (){
      return (
        <div className="friend-form">
        <h1>Update a new Friend </h1>
        <form onSubmit={this.postFriend}>
            <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.friendInfo.name}
            />
             <input
            type="text"
            name="age"
            placeholder="age"
            onChange={this.handleChange}
            value={this.state.friendInfo.age}
            />
             <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
            value={this.state.friendInfo.email}
            />
            <button className="updateFriendBtn" type="submit">Update Friend</button>
            </form>
    </div>
      )
  }
}

export default UpdateFriendComponent;