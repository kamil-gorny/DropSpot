type AvailableSize = {
    id: string;
    size: string;
    quantity: number;
    productId: string;
}
export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    color: string;
    imageUrl: string;
    sizes: AvailableSize[];
}

