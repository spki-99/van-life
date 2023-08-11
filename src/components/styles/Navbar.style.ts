import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

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

export const StyledLink = styled(Link)<{selected: boolean}>`
    text-decoration: ${props => props.selected ? 'underline' : 'none'};
    color: ${props => props.selected ? '#161616' : '#4D4D4D'};
    font-weight: 600;
    font-size: 16px;
    margin-left: 13px;
`