import { defer, useLoaderData, Await } from 'react-router-dom';
import { getHostVans } from '../../../api';
import Van from '../../../business-objects/Van';
import HostVanCard from '../../../components/HostVanCard';
import { StyledHostVansContainer }from '../../../components/styles/HostVans.style';
import { requireAuth } from '../../../utils/auth';
import { Suspense } from 'react';

export const loader = async ({ request }: { request: Request }) => {
    await requireAuth(request)
    return defer({ vans: getHostVans() });
}

const HostVans = () => {

    const deferPromise = useLoaderData() as { vans: Promise<Van[]> };

    const renderVans = (vans: Van[]) => {
        return vans.map(van => <HostVanCard key={van.id} van={van}/>);
        
    }

    return (
        <StyledHostVansContainer>
            <h2>Your listed vans</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={deferPromise.vans}>
                    {renderVans}
                </Await>
            </Suspense>
        </StyledHostVansContainer>
    )
}

export default HostVans;