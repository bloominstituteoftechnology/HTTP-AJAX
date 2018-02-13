import React, { Component } from 'react';

class FriendsList extends Component {
    render() {
    console.log('I am this in FriendsList: ', this);
        return (
            <div>
                { this.props.friends.map((card) => {
                    return (
                    <ul key={card.id} className="flc">
                        <li className="flc__name">{card.name}</li>
                        <li className="flc__age">{card.age}</li>
                        <li className="flc__email">{card.email}</li>
                    </ul>
                    )
                })}
            </div>
        )
    }

}

export default FriendsList;