
import { redirect } from './redirect';

export async function requireAuth() {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        console.log('re');
        throw redirect('/login?message=You must login first');
    }
}