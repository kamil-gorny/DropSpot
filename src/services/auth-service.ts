import { writable } from 'svelte/store';
import { PUBLIC_API_URL } from '$env/static/public';
type User = {
    email: string;
    token: string;
}

type LoginRequest = {
    email: string;
    password: string;
}
type TokenResponse = {
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}
export const tokenStore = writable<TokenResponse | null>(null);

export const login  = async (loginRequest : LoginRequest)=> {
    const url = `${PUBLIC_API_URL}/auth/login`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginRequest)
    });
    if (response.ok) {
        const data: TokenResponse = await response.json();
        tokenStore.set(data);
    }
};

export const register = async (firstName, lastName, email, password) => {
    const url = `${PUBLIC_API_URL}/auth/register`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ firstName, lastName, email, password })
    });
    if (response.ok) {
        const data = await response.json();
    } else {

    }
};
