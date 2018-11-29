import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import FriendForm from './FriendForm';

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
const EditFriend = props => {
  return (
    <DivWrapper>
      <FriendForm {...props} />
    </DivWrapper>
  );
};

// EditFriend.propTypes = {
//   propertyName: PropTypes.string
// }

export default EditFriend;
