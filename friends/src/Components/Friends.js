import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Friend from './Friend.js';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Friends = props => {
  return (
    <DivWrapper>
      {props.friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          displayFriend={props.urlLinks.friend}
        />
      ))}
    </DivWrapper>
  );
};

// Friends.propTypes = {
//   propertyName: PropTypes.string
// }

export default Friends;
