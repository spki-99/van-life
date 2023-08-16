import { styled } from 'styled-components';

export const Container = styled.section`
    padding: 51px 27px 75px;

    p { 
        text-align: center;
    }
`
export const InputContainer = styled.div`
    margin-top: 48px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #D1D5DB;
    height: 84px;
    overflow: hidden;

    input {
        color: #4D4D4D;
        padding: 0 13px;
        height: 50%;
        border: 0;
        display: block;
        width: 100%;

        &:focus {
            outline: 0;
        }
    }

    input:first-of-type {
        border-bottom: 1px solid #D1D5DB;
    }
`
export const SignInButton = styled.button`
        display: block;
        border: 0;
        border-radius: 6px;
        text-align: center;
        background-color: #FF8C38;
        color: white;
        font-size: 16px;
        font-weight: bold;
        width: 100%;
        padding: 18px;
        margin-top: 22px;

        &:disabled {
            background-color: #4D4D4D;
            cursor: auto;
        }
`
export const CreateAccountButton = styled.button`
        background-color: transparent;
        color: #FF8C38;
        font-size: 16px;
        font-weight: bold;
        border: 0;
        margin-top: 47px;
`

export const ErrorMessage = styled.h3`
    color: red;
`