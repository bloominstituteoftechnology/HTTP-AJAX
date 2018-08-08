import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavigationWrap = styled.div`

    z-index: 9999;
    display: block;
    margin: 0;
    max-height: 48px;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid #fff;

    
    
    > ul {
        display: flex;
        max-width: 980px;
        width: 100%;
        margin: 0 auto;
        align-items: center;
        list-style-type: none;
        

        > a {
            padding: 20px 20px;
            color: #fff;
            
            
        } 
        
    }


`

const Navigation = () => {
    return (
        <NavigationWrap>
            <ul>
                <NavLink to='/'>Home</NavLink> 
                <NavLink to='friendlist'>All Contacts</NavLink>
                <NavLink to='add-new-contact'>Add New Contact</NavLink>
            </ul>
        </NavigationWrap>
    );
}
export default Navigation;