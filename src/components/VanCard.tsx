import { Van } from '../pages/Vans';
import { StyledCardContainer, StyledVanInfoContainer, StyledVanType } from './styles/VanCard.style';

const VanCard: React.FC<{van: Van}> = (props) => {
    return (
        <StyledCardContainer>
            <img src={props.van.imageUrl}/>
            <StyledVanInfoContainer>
                <h3>{props.van.name}</h3>
                <h3>{'$' + props.van.price}</h3>
                <small>/day</small>
            </StyledVanInfoContainer>
            <StyledVanType type={props.van.type}>{props.van.type}</StyledVanType>
        </StyledCardContainer>
    )
}

export default VanCard;