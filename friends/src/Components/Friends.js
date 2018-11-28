import React from 'react';
import styled from 'styled-components';
import FriendInfo from './Friend';
// import PropTypes from 'prop-types';
// import FriendInfo from './Friend';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  background-color: black;
  color: white;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const DisplayFriends = props => {
  return (
    <DivWrapper>
      {props.friends.map(friend => (
        <FriendInfo friend={friend} />
      ))}
    </DivWrapper>
  );
};

// DisplayFriends.propTypes = {
//   propertyName: PropTypes.string
// }

export default DisplayFriends;
