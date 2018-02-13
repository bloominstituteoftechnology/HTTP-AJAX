import React from 'react';

function FriendsList (props) {
    console.log('FriendsList props: ', props)
    return (
        <div>
            { props.friends.map((card) => {
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

export default FriendsList;