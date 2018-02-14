import React from 'react';

function FriendsList(props) {
    return (
        <div>
            { props.friends.map((card) => {
                return (
                <ul key={card.id} className="flc">
                    <li className="flc__name">
                        <button onClick={() => {props.onX(card.id)}}>X</button>
                        {card.name}</li>
                    <li className="flc__age">{card.age}</li>
                    <li className="flc__email">{card.email}</li>
                    <li>
                    <hr />
                    <form className="flc__form" onSubmit={()=>{props.newDeetsSubmitHandler(card.id)}}>
                        <label>Update Name: </label>
                        <input type="text" name="name" value={props.name} onChange={props.deetsChangeHandler} placeholder="name"/>
                        <label>Update Age: </label>
                        <input type="number" name="age" value={props.age} onChange={props.deetsChangeHandler} placeholder="age"/>
                        <label>Update Email: </label>
                        <input type="email" name="email" value={props.email} onChange={props.deetsChangeHandler} placeholder="email"/>
                        <button type="submit">update</button>
                    </form>
                    </li>
                </ul>
                )
            })}
        </div>
    )

}

export default FriendsList;