import Van from '../../business-objects/Van';
import { useLoaderData, useLocation } from 'react-router-dom';
import { StyledVanType } from '../../components/styles/VanCard.style';
import { StyledVanDetailsContainer, StyledBackButton, StyledHeroImage, StyledRentButton } from '../../components/styles/VanDetails.style';
import { getVans } from '../../api';

export const loader = ({ params }: any) => getVans(params.id);

const VanDetails = () => {
    const queryString = useLocation().state.query;
    const typeFilter = new URLSearchParams(queryString).get('type');

    const van = useLoaderData() as Van;

    return (
            <StyledVanDetailsContainer>
                <img src={'../src/assets/back-arrow.png'}/>
                <StyledBackButton 
                    to={`..${queryString ? `?${queryString}` : '' }`}
                    relative='path'>
                        Back to {typeFilter ? typeFilter : 'all'} vans
                </StyledBackButton>
                <StyledHeroImage src={van.imageUrl}/>
                <StyledVanType type={van.type}>{van.type}</StyledVanType>
                <h1>{van.name}</h1>
                <h2>{'$' + van.price}</h2>
                <span>/day</span>
                <p>{van.description}</p>
                <StyledRentButton>Rent this van</StyledRentButton>
            </StyledVanDetailsContainer>
        )
}

export default VanDetails;