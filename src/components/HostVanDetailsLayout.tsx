import { PageContainer, DetailsContainer, TopContainer, TopColumnContainer } from './styles/HostVanDetailsLayout.style';
import Van from '../business-objects/Van';
import { StyledLink, StyledLinksContainer } from './styles/Navbar.style';
import { StyledVanType } from './styles/VanCard.style';
import { StyledBackButton } from './styles/VanDetails.style';
import { activeStyle } from './Navbar';
import { useState, useEffect } from 'react';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';

type VanContextType = Van | null

const HostVanDetailsLayout = () => {
    const [van, setVan] = useState<Van | null>(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(response => response.json())
            .then(obj => setVan(obj.vans));
    }, []);

    return (
        !van 
        ? <h1>Loading...</h1> 
        : <PageContainer>
            <img src={'../../../src/assets/back-arrow.png'}/>
            <StyledBackButton to='/host/vans'>Back to all vans</StyledBackButton>
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
        </PageContainer>
    )
}

export const useVan = () => { 
    return useOutletContext<VanContextType>();
}

export default HostVanDetailsLayout;