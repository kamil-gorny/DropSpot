import type {Product} from "../../models/Product";

    export async function GetProducts() : Promise<Product[]> {
        const url = "http://localhost:5170/api/product";
        try {
            const result = await fetch(url);
            return await result.json() as Product[];
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    export async function GetProduct(id: string) : Promise<Product> {
        const url = `http://localhost:5170/api/product/${id}`;

        try{
            const result = await fetch(url);
            return await result.json() as Product;
        }
        catch (e){
            console.log(e);
            throw e;
            }
    }
