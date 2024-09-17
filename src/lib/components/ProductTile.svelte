<script>
    export let name;
    export let price;
    export let image;

</script>
<a href="{name}">
<div class="w-[250px] -m-2 border-transparent border hover:border hover:border-gray-200 hover:cursor-pointer">
    <img draggable="false" src={image} alt="tshirt"/>
    <p class="text-xs">{name}</p>
    <p class="text-xs">${price}</p>
</div>
</a>