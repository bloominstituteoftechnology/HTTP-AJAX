import React from 'react';
import FriendForm from './friend-form';

class FriendCard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showForm: false
        };
    }
    render() {
        let content;
        if(this.state.showForm) {
            content = <FriendForm
                onSubmit={(data) => {
                    this.props.onChange(data);
                    this.setState({showForm: false})
                }}
                friend={this.props.friend}
            />
        } else{
            content = (
                <div className="friend-card_stats">
                    <h2>{this.props.friend.name}</h2>
                    <button
                        className="friend-card_delete"
                        data-id={this.props.friend.id}
                        onClick={this.props.onDelete}
                        children="X"
                    />
                    <button
                        className="friend-card_update"
                        data-id={this.props.friend.id}
                        onClick={this.showForm}
                        children="+"
                    />
                    <span>Email: {this.props.friend.email}</span>
                    <span>Age: {this.props.friend.age}</span>
                </div>
            )
        }
        return (
            <div className="card friend-card">
                {content}
            </div>
        );
    }

    //
    showForm = clickEvent => {
        clickEvent.preventDefault();
        this.setState({
            showForm: true
        });
    }
}

export default FriendCard;
