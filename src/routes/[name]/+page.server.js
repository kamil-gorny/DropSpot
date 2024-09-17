import { products } from '../data.js';
import {error} from "@sveltejs/kit";

export function load({ params }){
    const product = products.find(product => product.name === params.name);
    if(!product) throw error(404);
    return {
        product
    };
}