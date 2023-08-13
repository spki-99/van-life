import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledVanDetailsContainer = styled.div`
    background-color: #FFF7ED;
    padding: 40px 27px 84px;

    h1 {
        margin-top: 20px;
        font-size: 32px;
        font-weight: bold;  
    }

    h2 {
        margin-top: 10px;
        font-size: 24px;
        font-weight: bold;  
        display: inline-block;
    }

    span {
        font-size: 20px;
        font-weight: 500;
    }

    p {
        margin-top: 10px;
    }
`

export const StyledRentButton = styled.button`
        display: block;
        border: 0;
        border-radius: 5px;
        background-color: #FF8C38;
        color: white;
        font-weight: bold;
        font-size: 18px;
        width: 100%;
        padding: 10px;
        margin-top: 22px;
`


export const StyledBackButton = styled(Link)`
    text-decoration: underline;
    font-size: 16px;
    font-weight: 500;
    color: #201F1D;
    margin-left: 11px;
    background-color: transparent;
    border: 0;
`

export const StyledHeroImage = styled.img`
    display: block;
    max-width: 100%;
    border-radius: 5px;
    margin-top: 41px;
    margin-bottom: 50px;
`