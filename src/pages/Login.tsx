import { Container, InputContainer, SignInButton, CreateAccountButton, ErrorMessage } from "../components/styles/Login.style";
import { Form, useActionData, useLoaderData, useNavigation } from "react-router-dom";

import { loginUser } from "../api";
import { redirect } from "../utils/redirect";

export const loader = ({ request }: { request: Request }) => {
    return new URL(request.url).searchParams.get('message');
}

export const action = async ({request}: {request: Request}) => {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    const redirectPath = new URL(request.url).searchParams.get('redirectTo');
    try {
        const response = await loginUser(email?.toString() ?? '', password?.toString() ?? '');
        localStorage.setItem('loggedIn', 'true');
        return redirect(redirectPath ?? '/host');
    }
    catch(error) {
        return error;
    }
}

enum LoginStatus {
    idle = 'idle',
    submitting = 'submitting'
}

const Login = () => {
    const status = useNavigation().state;
    const error = useActionData() as Error;
    const message = useLoaderData() as string;

    return (
        <Container>
            <h1>
                Sign in to your account
            </h1>
            {error && 
            <>
                <br/>
                <ErrorMessage>
                    {error.message}
                </ErrorMessage>
            </>}
            {message &&
                <>
                    <br/>
                    <ErrorMessage>
                        {message}
                    </ErrorMessage>
                </>
            }
            <Form method='post'>
                <InputContainer>
                    <input
                        type='email'
                        placeholder='Email address'
                        name='email'
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                    />
                </InputContainer>
                <SignInButton 
                    disabled={status === LoginStatus.submitting}>
                        {status === LoginStatus.submitting ? 'Signing in...' : 'Sign in'}
                </SignInButton>
            </Form>
            <p>
                Don't have an account? <CreateAccountButton>Create one now</CreateAccountButton>
            </p>
        </Container>
    )
}

export default Login;