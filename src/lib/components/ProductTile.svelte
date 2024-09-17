<script>
    import tshirt from '$lib/images/tshirt.webp';
    export let name;
    export let price;
    export let image;

</script>
<div class="w-[250px]">
    <img src={image} alt="tshirt"/>
    <p class="text-xs">{name}</p>
    <p class="text-xs">${price}</p>
</div>