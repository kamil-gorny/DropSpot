<script>
    import Navigation from "$lib/components/Navigation.svelte";
    import ProductTile from "../lib/components/ProductTile.svelte";
    import tshirt from "$lib/images/tshirt.webp";
</script>

<div class="flex flex-row justify-center mt-28 gap-8">
<Navigation/>

<div class="grid grid-cols-3 gap-4">
<ProductTile image={tshirt} name="Custom T-shirt" price="20"/>

</div>
</div>