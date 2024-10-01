import { writable } from 'svelte/store';
import { PUBLIC_API_URL } from '$env/static/public';
type User = {
    email: string;
    token: string;

}
export const userStore = writable<User>();
export const login = async (email, password) => {
    const url = `${PUBLIC_API_URL}/auth/login`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });
    if (response.ok) {
        const data = await response.json();
        userStore.set(data);
    } else {

    }
};
