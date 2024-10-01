import { writable } from 'svelte/store';
type User = {
    email: string;
    token: string;

}
export const userStore = writable<User>();
export const login = async (email, password) => {
    const url = "http://localhost:5170/api/identity/login";
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
