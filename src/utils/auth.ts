
import { redirect } from './redirect';

export async function requireAuth(request: Request) {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const redirectPath = new URL(request.url).pathname;
    if (!isLoggedIn) {
        throw redirect(`/login?message=You must login first&redirectTo=${redirectPath}`);
    }
    return null;
}