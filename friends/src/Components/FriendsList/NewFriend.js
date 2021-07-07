import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    margin: 0 auto;
    font-size: 1.5rem;
    width: 300px;
    border: 2px solid pink;
    padding: 0.5rem;
    text-align: center;
    height: 180px;
    margin-top: 100px;
`

const NewFriend = props => {
    return(
        <Header>Add/Change Pal
        <form onSubmit={props.newFriend}>
            <input name="name" type="text" placeholder='name' onChange={props.change} /><br />
            <input name="age" type="number" placeholder='age' onChange={props.change} /><br />
            <input name="email" type="email" placeholder='email' onChange={props.change} /><br />
            <button>Save</button>
        </form>
    </Header>
    )
}
 export default NewFriend; 