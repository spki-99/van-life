import { useState } from "react";
import { Container, InputContainer, SignInButton, CreateAccountButton } from "../components/styles/Login.style";
import { useLoaderData } from "react-router-dom";

export const loader = ({ request }: { request: Request }) => {
    return new URL(request.url).searchParams.get('message');
}

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = ({target}: {target: EventTarget & HTMLInputElement}) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [target.name]: target.value
        }));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }

    const message = useLoaderData() as string;

    return (
        <Container>
            <h1>
                {message && message}
                {message && <><br/><br/></>}
                Sign in to your account</h1>
            <form onSubmit={handleSubmit}>
                <InputContainer>
                    <input
                        type='email'
                        onChange={handleChange}
                        placeholder='Email address'
                        name='email'
                        value={formData.email}
                    />
                    <input
                        type='password'
                        onChange={handleChange}
                        placeholder='Password'
                        name='password'
                        value={formData.password}
                    />
                </InputContainer>
                <SignInButton>Sign in</SignInButton>
            </form>
            <p>
                Don't have an account? <CreateAccountButton>Create one now</CreateAccountButton>
            </p>
        </Container>
    )
}

export default Login;