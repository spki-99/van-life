import { Container, BackButton } from "../components/styles/NotFound.style";

const NotFound = () => {
    return (
        <Container>
            <h1>
                Sorry, the page you were looking for was not found.
            </h1>
            <BackButton to='/'>Return to home</BackButton>
        </Container>
    )
}

export default NotFound;