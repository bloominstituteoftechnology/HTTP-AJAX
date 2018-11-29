import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  background-color: rgba(128, 0, 128, 0.7);
  color: white;
  margin: 20px;
  border-radius: 10px;
  width: 20%;
`;

const DivName = styled.div`
  text-align: center;
  font-size: 48px;
  border: 2px solid black;
  border-radius: 10px;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Friend = props => {
  return (
    <DivWrapper>
      <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to={`${props.link}/${props.friend.id}`}
      >
        <DivName>{props.friend.name}</DivName>
        <h3>Age: {props.friend.age}</h3>
        <h3>Email: {props.friend.email}</h3>
      </Link>
    </DivWrapper>
  );
};

// Friend.propTypes = {
//   propertyName: PropTypes.string
// }

export default Friend;
