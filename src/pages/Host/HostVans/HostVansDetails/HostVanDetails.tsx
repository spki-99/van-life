import { useVan } from "../../../../components/HostVanDetailsLayout";
import { Container } from "../../../../components/styles/HostVanDetails.style";

const HostVanDetails = () => {
    const van = useVan();

    return (
        !van 
        ? <h1>Loading...</h1>
        : <Container>
            <p>
                <b>Name: </b>{van.name}
            </p>
            <p>
                <b>Category: </b>{van.type}
            </p>
            <p>
                <b>Description: </b>{van.description}
            </p>
            <p>
                <b>Visibility: </b>Public
            </p>
        </Container>
    )
}

export default HostVanDetails;