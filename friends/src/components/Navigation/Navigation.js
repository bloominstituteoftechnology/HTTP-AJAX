import React from 'react'
import { Header, StyledNavBar, StyledLink } from '../ReusableComponents/Navigation';
const Navigation = () => {
    return (
        <Header>

            <StyledNavBar>
                
                <div>
                    <StyledLink to='/'>Home</StyledLink>
                </div>
                <div>
                    <StyledLink to='/edit'>Edit</StyledLink>
                </div>

            </StyledNavBar>
            
        </Header>
    );
}

export default Navigation;