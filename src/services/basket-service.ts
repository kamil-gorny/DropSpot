import { writable } from 'svelte/store';

type Item = {
    id: string;
    quantity: string;
    color: string;
}
export const basketStore = writable<Item | null>(null);