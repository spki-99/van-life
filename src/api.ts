import Van from "./business-objects/Van";

export interface ApiError {
    message: string,
    statusText: string,
    status: string
}

export async function getVans() {
    const response = await fetch('/api/vans');
    if (!response.ok) {
        throw {
            message: 'Fetching vans failed.',
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json();
    return data.vans as Van[]
}