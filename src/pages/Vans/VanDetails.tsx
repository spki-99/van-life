import Van from '../../business-objects/Van';
import { Await, defer, useLoaderData, useLocation } from 'react-router-dom';
import { StyledVanType } from '../../components/styles/VanCard.style';
import { StyledVanDetailsContainer, StyledBackButton, StyledHeroImage, StyledRentButton } from '../../components/styles/VanDetails.style';
import { getVans } from '../../api';
import { Suspense } from 'react';

export const loader = ({ params }: any) => defer({ van: getVans(params.id) });

const VanDetails = () => {
    const queryString = useLocation().state.query;
    const typeFilter = new URLSearchParams(queryString).get('type');
    const deferPromise = useLoaderData() as { van: Promise<Van> };

    const renderContent = (van: Van) => {
        return (
            <>
                <StyledHeroImage src={van.imageUrl}/>
                <StyledVanType type={van.type}>{van.type}</StyledVanType>
                <h1>{van.name}</h1>
                <h2>{'$' + van.price}</h2>
                <span>/day</span>
                <p>{van.description}</p>
                <StyledRentButton>Rent this van</StyledRentButton>
            </>
        )
    }

    return (
            <StyledVanDetailsContainer>
                <img src={'../src/assets/back-arrow.png'}/>
                <StyledBackButton 
                    to={`..${queryString ? `?${queryString}` : '' }`}
                    relative='path'>
                        Back to {typeFilter ? typeFilter : 'all'} vans
                </StyledBackButton>
                <Suspense fallback={<><br/><h2>Loading...</h2></>}>
                    <Await resolve={deferPromise.van}>
                        {renderContent}
                    </Await>
                </Suspense>
            </StyledVanDetailsContainer>
        )
}

export default VanDetails;