import React from 'react';


//Passed as props from App.js
// key={d.id} friend={d} deleteFriend={props.deleteFriend} selectUpdateID={this.selectUpdateID}

class Card extends React.Component {
    constructor() {
        super();
    }

    deleted = (id) => {
        this.props.deleteFriend(id)
    }

    //sends the id from the edit icon within a certain div
    update = (id, obj) => {
        // console.log(id);
        this.props.selectUpdateID(id, true, obj)
    }

    render() {
        return (
            <div className="card">

                <div key={this.props.friend.id} className="card">
                    <ul>
                        <li>{this.props.friend.name}</li>
                        <li>{this.props.friend.age}</li>
                        <li>{this.props.friend.email}</li>
                    </ul>
                        <img
                            src="https://img.icons8.com/ios-glyphs/20/000000/close-window.png" alt="delete button"
                            className="delete"
                            onClick={() => this.deleted(this.props.friend.id)} />
                        <img 
                        src="https://img.icons8.com/ios-glyphs/20/000000/multi-edit.png" 
                        alt="edit entry"
                        onClick={() => this.update(this.props.friend.id, {name: this.props.friend.name, age: this.props.friend.age, email: this.props.friend.email} )} />
                </div>
            </div>
        )
    }
}

export default Card