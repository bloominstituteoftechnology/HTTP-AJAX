import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const FriendStyled = styled.div`
        margin-bottom: 69px;
        
    `;
    

    
const Friend = (props) =>{
    
    return(
        
        <FriendStyled>
            {/* {...props} */}
            <h2>{props.friend.name}</h2>
            <h3>age:{props.friend.age}</h3>
            <h4>contact:{props.friend.email}</h4>
            <button onClick= {e => props.handleButtonClick(e, props.friend.id)}>X</button>
        </FriendStyled>
       
    )
}

Friend.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
    })
}

export default Friend;