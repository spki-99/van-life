import { styled } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledNavbar = styled.div`
    display: flex;
    background-color: #FFF7ED;
    justify-content: space-between;
    align-items: center;
    height: 112px;
    padding: 0 26px;
`

export const StyledHomeLink = styled(Link)`
    text-decoration: none;
    font-weight: 900;
    font-size: 25px;
    color: black;
`

export const StyledLinksContainer = styled.div`
    display: flex;
    gap: 23px;
    align-items: center;
`

export const StyledLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    color: #4D4D4D;
    font-weight: 600;
    font-size: 16px;

    &:hover {
        color: #161616;
        text-decoration: underline;
    }
`

export const StyledUserLink = styled(Link)`
    img {
        width: 24px;
    }
`