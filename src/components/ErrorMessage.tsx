import { Container, BackButton } from './styles/NotFound.style';
import { useRouteError } from 'react-router-dom';
import { ApiError } from '../api';

const ErrorMessage = () => {
    const error = useRouteError() as ApiError;
    return (
        <Container>
            <h1>
                An error occured: {error.message}.
                <br/>
                <br/>
                <code>{error.status} - {error.statusText}</code> 
            </h1>
            <BackButton to='..'>Go back</BackButton>
        </Container>
    )
}

export default ErrorMessage;