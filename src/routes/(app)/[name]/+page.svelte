<script>
    export let data;
    let currentlySelectedVersion = {
        'index': 0,
        'image': data.product.variants[0].image
    };
    function setCurrentlySelectedVersion(index, image){
        currentlySelectedVersion.image = image;
        currentlySelectedVersion.index = index;
    }

    console.log(data);
</script>

<div class="flex flex-row pt-20 gap-10 ">
    <img class="w-3/6" src="{currentlySelectedVersion.image}" alt="product"/>
    <div>
        <p class="text-xl">{data.product.name}</p>
        <p class="text-xs font-bold">{data.product.variants[currentlySelectedVersion.index].color}</p>
        <p class="text-xs">{data.product.description}</p>
        <div class="grid gap-3 grid-cols-3 w-1/3 pt-10">
            {#each data.product.variants as variant, i}
                <img class="hover:cursor-pointer" src="{variant.image}" alt="{variant.color}" on:click={setCurrentlySelectedVersion(i, variant.image)}/>
                <img class="hover:cursor-pointer" src="{variant.alternativeImage}" alt="{variant.color}"  on:click={setCurrentlySelectedVersion(i, variant.alternativeImage)}/>
            {/each}
        </div>
        <p class="pt-8">${data.product.price}</p>
        <select class="mt-10 border border-black pr-8 pl-6 align-middle">
            {#each data.product.variants[currentlySelectedVersion.index].availableSizes as size}
            <option value="{size}">{size}</option>
                {/each}
        </select>
        <button class="bg-black text-white block pr-4 pl-4 mt-3">add to cart</button>
    </div>

</div>
<div class="flex flex-row gap-4 text-sm mt-36">
    <p>shop</p>
    <p>view all</p>
</div>
