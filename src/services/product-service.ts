import { PUBLIC_API_URL } from '$env/static/public';

export function getProducts() {
    return fetch(`${PUBLIC_API_URL}/api/products`).then(res => res.json());
}

export function getProduct(id: string) {
    return fetch(`${PUBLIC_API_URL}/api/products/${id}`).then(res => res.json());
}