import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

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
const FriendInfo = props => {
  return (
    <DivWrapper>
      <h1>This is the FriendInfo Component</h1>
    </DivWrapper>
  );
};

// FriendInfo.propTypes = {
//   propertyName: PropTypes.string
// }

export default FriendInfo;
