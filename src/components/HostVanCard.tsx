import Van from '../business-objects/Van';
import { StyledHostVanCard, StyledHostVanCardContent } from './styles/HostVanCard.style';

const HostVanCard = (props: { van: Van }) => {
    return (
        <StyledHostVanCard to={props.van.id}>
            <img src={props.van.imageUrl}/>
            <StyledHostVanCardContent>
                <h3>{props.van.name}</h3>
                <p>{'$' + props.van.price + '/day'}</p>
            </StyledHostVanCardContent>
        </StyledHostVanCard>
    )
}

export default HostVanCard;