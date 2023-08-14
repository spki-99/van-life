import Van from '../business-objects/Van';
import { StyledCardContainer, StyledVanInfoContainer, StyledVanType } from './styles/VanCard.style';

const VanCard: React.FC<{van: Van, query: string}> = ({van, query}) => {
    return (
        <StyledCardContainer to={van.id} state={{query: query}}>
            <img src={van.imageUrl}/>
            <StyledVanInfoContainer>
                <h3>{van.name}</h3>
                <h3>{'$' + van.price}</h3>
                <small>/day</small>
            </StyledVanInfoContainer>
            <StyledVanType type={van.type}>{van.type}</StyledVanType>
        </StyledCardContainer>
    )
}

export default VanCard;