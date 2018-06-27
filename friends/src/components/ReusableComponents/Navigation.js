import styled from 'styled-components';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Header = styled.div`
    position: sticky;
    top: 0;
    z-index: 3;
    background: black;
`

export const StyledNavBar = styled(Navbar)`
    max-width: 1000px;
    margin: 0 auto;
    padding: 7px 40px;
`

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: white;
    }
`