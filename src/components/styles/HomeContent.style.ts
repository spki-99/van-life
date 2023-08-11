import { styled } from 'styled-components';
import backgroundImage from '../../assets/home-background.svg'
import { Link } from 'react-router-dom';

export const StyledHomeContent = styled.div`
    padding: 65px 27px;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position-y: 0;

    h2 {
        color: white;
        font-weight: 800;
        font-size: 36px;
        margin-bottom: 23px;
    }

    p {
        color: white;
        margin-bottom: 52px;
    }
`
export const StyledHomeVansLink = styled(Link)`
    display: block;
    text-align: center;
    width: 100%;
    text-decoration: none;
    padding: 9px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    border: 0;
    border-radius: 5px;
    background-color: #FF8C38;
`