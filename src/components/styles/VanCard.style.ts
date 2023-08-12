import { styled } from 'styled-components';

export const getVanColor = (type: string) => {
    switch (type.toLowerCase()) {
        case 'simple':
            return '#E17654';
        case 'rugged':
            return '#115E59';
        case 'luxury':
            return '#161616';
        default:
            return '#161616'
    }
}

export const StyledCardContainer = styled.div`
    width: 229px;
    cursor: pointer;

    img {
        max-width: 100%;
        border-radius: 5px;
    }
`

export const StyledVanInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    position: relative;
    margin-bottom: 5px;

    h3 {
        font-size: 20px;
        font-weight: 600;
    }

    small {
        position: absolute;
        right: 0;
        top: 100%;
        font-weight: 500;
        font-size: 14px;
    }
`

export const StyledVanType = styled.div<{type: string}>`
    text-transform: capitalize;
    display: inline-block;
    padding: 3px 14px;
    color: #FFEAD0;
    font-weight: 600;
    border-radius: 5px;
    background-color: ${props => getVanColor(props.type)};
`