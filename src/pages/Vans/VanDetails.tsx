import Van from '../../business-objects/Van';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { StyledVanType } from '../../components/styles/VanCard.style';
import { StyledVanDetailsContainer, StyledBackButton, StyledHeroImage, StyledRentButton } from '../../components/styles/VanDetails.style';

const VanDetails = () => {
    const [van, setVan] = useState<Van | null>(null);
    const params = useParams();
    
    useEffect(() => {
        if (params.id === undefined) { return }
        fetch(`/api/vans/${params.id}`)
            .then(response => response.json())
            .then(obj => setVan(obj.vans));
    }, [params.id]);

    return (
        van &&
        <StyledVanDetailsContainer>
            <img src={'../src/assets/back-arrow.png'}/>
            <StyledBackButton to='..' relative='path'>Back to all vans</StyledBackButton>
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