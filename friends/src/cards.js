import React from 'react';

import Card from './card';

/*
Passed as Props

friends={this.state.friends}

*/

const Cards = props => {
    return(
        <div className="cards">
            {props.friends.map( d => {
                return (
                <Card key={d.id} friend={d} />
                )
            })}
        </div>
    )
}

export default Cards