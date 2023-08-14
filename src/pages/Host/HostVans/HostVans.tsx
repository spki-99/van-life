import Van from '../../../business-objects/Van';
import HostVanCard from '../../../components/HostVanCard';
import { StyledHostVansContainer }from '../../../components/styles/HostVans.style';
import { useEffect, useState } from 'react';

const HostVans = () => {
    const [vans, setVans] = useState<Van[]>([]);

    useEffect(() => {
        fetch('/api/host/vans')
            .then(response => response.json())
            .then(obj => setVans(obj.vans));
    }, []);

    const vanCards = vans.map(van => <HostVanCard key={van.id} van={van}/> );

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