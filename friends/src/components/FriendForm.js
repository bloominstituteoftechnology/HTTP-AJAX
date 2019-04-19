import React from 'react';

class FriendForm extends React.Component {
    state = {
        friend: this.props.activeItem || {
           id: '',
           name: '',
           age: '',
           email: ''
        }
    };

    componentDidUpdate(prevProps) {
        if (
            this.props.activeItem &&
            prevProps.activeItem !== this.props.activeItem
        ) {
            this.setState({
                friend: this.props.activeItem
            });
        }
    }

    changeHandler = event => {
        event.persist();
        let value = event.target.value;
        if(event.target.name === 'age') {
            value = parseInt(value, 10);
        }
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [event.target.name]: value
        }
        }));
    }

    handleSubmit = event => {
        if (this.props.activeItem) {
            this.props.updateFriend(event, this.state.friend);
        } else {
            this.props.addFriend(event, this.state.friend);
        }
        this.setState({
            friend: {
                id: '',
                name: '',
                age: '',
                email: ''
            }
        });
    };

    render() {
        return (
            <div>
            <p>FriendForm</p>

            <h2>{`${this.props.activeItem ? 'Update' : 'Add New'} Item `}</h2>
            <form onSubmit={this.handleSubmit}>
                <input
                type="number"
                id="id"
                onChange={this.changeHandler}
                placeholder="id"
                value={this.state.friend.id}
                />

                  <input
                type="text"
                name="name"
                onChange={this.changeHandler}
                placeholder="name"
                value={this.state.friend.name}
                />

                  <input
                type="number"
                age="age"
                onChange={this.changeHandler}
                placeholder="age"
                value={this.state.friend.age}
                />

                  <input
                type="string"
                email="email"
                onChange={this.changeHandler}
                placeholder="email"
                value={this.state.friend.email}
                />
            
                {/* <button className="form-button">{`${this.props.activeItem ? 'Update' : 'Add New'} Friend`</button> */}

            </form>
            </div>
            
        );
    }
}

export default FriendForm;