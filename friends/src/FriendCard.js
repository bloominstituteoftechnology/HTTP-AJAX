import React from 'react';
// import {
//     Card, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardStyle = styled.div`
    border: 1px dotted black;
    border-radius: 6px;
    width: 333px;
    margin: 1rem;
    padding: 0.5rem;
`;

const FriendCard = (props) => {
    return (
        <CardStyle>
            <h2>{props.name}</h2>
            {/* <img src={`https://robohash.org/${props.name}?set=set3`} /> */}
            <h5>Age: {props.age} E-mail: {props.mail}</h5>
            <h5>Is a Robot: <del>Yes</del> NO. TOTALLY HUMAN.</h5>
            <div className="">
                <Link to={`/update/edit/${props.id}`}>
                    <button className="b ph2 pv1 input-reset ba b--black bg-transparent grow pointer f6 dib mh2">Update</button>
                </Link>
                <button className="b ph2 pv1 input-reset ba b--black bg-transparent grow pointer f6 dib mh2" onClick={() => props.delete(props.id)}>Delete</button>
            </div>
        </CardStyle>
    );
};

export default FriendCard;