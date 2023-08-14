import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHostVanCard = styled(Link)`
    background-color: white;
    border-radius: 6px;
    padding: 18px 24px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    color: #161616;
    text-decoration: none;

    img {
        border-radius: 5px;
        max-height: 66px;
    }
`

export const StyledHostVanCardContent = styled.div`
    margin-left: 17px;
    flex-shrink: 0;

    h3 {
        font-weight: 600;
        font-size: 20px;
    }

    p {
        color: #4D4D4D;
    }
`