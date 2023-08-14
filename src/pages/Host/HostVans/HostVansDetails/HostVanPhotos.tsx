import { useVan } from "../../../../components/HostVanDetailsLayout";
import Container from "../../../../components/styles/HostVanPhotos.style";

const HostVanPhotos = () => {
    const van = useVan();

    return (
        !van 
        ? <h1>Loading...</h1>
        : <Container>
            <img src={van.imageUrl}/>
            <img src={van.imageUrl}/>
            <img src={van.imageUrl}/>
            <img src={van.imageUrl}/>
            <img src={van.imageUrl}/>
            <img src={van.imageUrl}/>
            <img src={van.imageUrl}/>
            <img src={van.imageUrl}/>
            <img src={van.imageUrl}/>
        </Container>
    )
}

export default HostVanPhotos;