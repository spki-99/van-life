import { PageContainer, DetailsContainer, TopContainer, TopColumnContainer } from './styles/HostVanDetailsLayout.style';
import Van from '../business-objects/Van';
import { StyledLink, StyledLinksContainer } from './styles/Navbar.style';
import { StyledVanType } from './styles/VanCard.style';
import { StyledBackButton } from './styles/VanDetails.style';
import { activeStyle } from './Navbar';
import { Await, Outlet, defer, useLoaderData, useOutletContext } from 'react-router-dom';
import { getHostVans } from '../api';
import { requireAuth } from '../utils/auth';
import { Suspense } from 'react';

type VanContextType = Van | null

export const loader = async ({ params, request }: any) => { 
    await requireAuth(request);
    return defer({ van: getHostVans(params.id) }); 
}

const HostVanDetailsLayout = () => {
    const deferPromise = useLoaderData() as { van: Promise<Van> };

    const renderContent = (van: Van) => {
        return (
        <DetailsContainer>
            <TopContainer>
                <img src={van.imageUrl}/>
                <TopColumnContainer>
                    <StyledVanType type={van.type}>{van.type}</StyledVanType>
                    <h3>{van.name}</h3>
                    <p>{'$' + van.price + '/day'}</p>
                </TopColumnContainer>
            </TopContainer>
            <StyledLinksContainer>
                <StyledLink 
                    to='.'
                    end
                    style={({isActive}) => isActive ? activeStyle : {}}>
                    Details
                </StyledLink>
                <StyledLink
                    to='pricing'
                    style={({isActive}) => isActive ? activeStyle : {}}>
                    Pricing
                </StyledLink>
                <StyledLink
                    to='photos'
                    style={({isActive}) => isActive ? activeStyle : {}}>
                    Photos
                </StyledLink>
            </StyledLinksContainer>
            <Outlet context={ van }/>
        </DetailsContainer>
        )
    }

    return (
        <PageContainer>
            <img src={'../../../src/assets/back-arrow.png'}/>
            <StyledBackButton to='/host/vans'>Back to all vans</StyledBackButton>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={deferPromise.van}>
                    {renderContent}
                </Await>
            </Suspense>
        </PageContainer>
    )
}

export const useVan = () => { 
    return useOutletContext<VanContextType>();
}

export default HostVanDetailsLayout;