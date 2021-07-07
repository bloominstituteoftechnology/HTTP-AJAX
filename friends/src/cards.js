import React from 'react';

import Card from './card';

/*
Passed as Props

friends={this.state.friends}
deleteFriend={this.deleteFriend}
selectUpdateID={this.selectUpdateID}

*/

const Cards = props => {
    return(
        <div className="cards">
            {props.friends.map( d => {
                return (
                <Card key={d.id} friend={d} deleteFriend={props.deleteFriend} selectUpdateID={props.selectUpdateID}/>
                )
            })}
        </div>
    )
}

export default Cards