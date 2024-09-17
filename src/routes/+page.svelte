<script>
    import Navigation from "$lib/components/Navigation.svelte";
    import ProductTile from "../lib/components/ProductTile.svelte";
    import tshirt from "$lib/images/tshirt.webp";
    export let data;
</script>

<div class="flex flex-row justify-center mt-28 gap-8">
<Navigation/>

<div class="grid grid-cols-3 gap-8">
    {#each data.products as {name, price, image}}
        <ProductTile image={image} name={name} price={price} link="fsfds"/>
    {/each}
</div>
</div>