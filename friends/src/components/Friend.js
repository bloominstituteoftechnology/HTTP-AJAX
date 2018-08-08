import React from 'react';
import styled from 'styled-components';

const Form = styled.div`

    display: flex;
    width: 300px;
    height: 500px;
    border: 1px solid gray;
    border-radius: 40px;
    flex-direction: column;
    margin: 20px 0;
    background-color: rgba(255, 255,255, 0.8);
    align-items: center;
    justify-content: center;

    
`


const Friend = (props) => {
    return(
        <Form>
            <div className="name">
                <h2>Name: {props.name}</h2>
            </div>
            <div className="age">
                <h3>Age: {props.age}</h3>
            </div>
            <div className="email">
                <h3>Email: {props.email}</h3>
            </div>
        </Form>
    );
}

export default Friend;