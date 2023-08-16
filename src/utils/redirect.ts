import { redirect } from 'react-router-dom';

function mutateResponse(path: string) {
    const response = redirect(path);
    response.body = true;
    return response;
}

export { mutateResponse as redirect };