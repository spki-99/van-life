import { useVan } from "../../../../components/HostVanDetailsLayout";
import Container from "../../../../components/styles/HostVanPricing.style";

const HostVanPricing = () => {
    const van = useVan();

    return (
        !van
        ? <h1>Loading...</h1> 
        : <Container>
            <p>
                ${van.price}<span>/day</span>
            </p>
        </Container>
    )
}

export default HostVanPricing;