import Van from "./business-objects/Van";

export interface ApiError {
    message: string,
    statusText: string,
    status: string
}

export async function getVans(id: string | null = null) {
    const response = await fetch(`/api/vans${id ? `/${id}` : ''}`);
    if (!response.ok) {
        throw {
            message: 'Fetching vans failed.',
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json();
    if (Array.isArray(data.vans)) {
        return data.vans as Van[];
    }
    return data.vans as Van;
}

export async function getHostVans(id: string | null = null) {
    const response = await fetch(`/api/host/vans${id ? `/${id}` : ''}`);
    if (!response.ok) {
        throw {
            message: 'Fetching vans failed.',
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json();
    if (Array.isArray(data.vans)) {
        return data.vans as Van[];
    }
    return data.vans as Van;
}