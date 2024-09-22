<script lang="ts">
    import Navigation from "../lib/components/Navigation.svelte";
    import ProductTile from "../lib/components/ProductTile.svelte";
    import { onMount } from 'svelte';
    import { GetProducts } from "$lib/services/product-service";
    import type {Product} from "../models/Product";


    let products : Product[] = [];

    onMount(async () => {
        products = await GetProducts();
    });
</script>

<div class="flex flex-row justify-center mt-28 gap-8">
<Navigation/>

<div class="grid grid-cols-3 gap-8">
    {#each products as product}
        <ProductTile image={product.imageUrl} name={product.name} price={product.price}/>
    {/each}
</div>
</div>