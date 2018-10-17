import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
 const NavStyled = styled.div`
    display: flex;
`
 const LinkWrapper = styled.div`
    margin: 20px;
`
 const Navigation = (props) =>{
    return(
        <NavStyled>
            <LinkWrapper>
                <Link to={'/'}>Home</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to={'/addfriend'}>Add A Friend</Link>
            </LinkWrapper>
        </NavStyled>
    )
}
 export default Navigation; 