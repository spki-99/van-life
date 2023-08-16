import { useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../../api';
import Van from '../../../business-objects/Van';
import HostVanCard from '../../../components/HostVanCard';
import { StyledHostVansContainer }from '../../../components/styles/HostVans.style';
import { requireAuth } from '../../../utils/auth';

export const loader = async () => {
    await requireAuth();
    return getHostVans();
}

const HostVans = () => {
    const vans = useLoaderData() as Van[];
    const vanCards = vans.map(van => <HostVanCard key={van.id} van={van}/>);

    return (
        <StyledHostVansContainer>
            <h2>Your listed vans</h2>
            <div>
                {vanCards} 
            </div>
        </StyledHostVansContainer>
    )
}

export default HostVans;