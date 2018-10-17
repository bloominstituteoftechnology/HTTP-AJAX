import React from 'react';
import axios from 'axios';

class FriendAdder extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showForm: false
        };
    }
    //-- Rendering -----------------------------------
    render() {
        let content;
        if(this.state.showForm){
            content = <form className="add-card_form">
                <label>Name <input type="text" /></label>
                <label>Email <input type="text" /></label>
                <label>Age <input type="number" /></label>
            </form>;
        } else{
            content = <div
                className="add-card_show"
                onClick={this.showForm}
                children="+"
            />;
        }
        return (
            <div className="card add-card">
                {content}
            </div>
        );
    }

    //-- Interaction ---------------------------------
    showForm = clickEvent => {
        this.setState({showForm: true});
    }
}

export default FriendAdder;
