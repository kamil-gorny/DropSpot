<script>
    import '../../app.css';
    import Logo from "$lib/components/Logo.svelte";
    import Icon from "@iconify/svelte";
    import { get } from 'svelte/store';
    import {tokenStore} from "../../services/auth-service.ts";
</script>

<div class="flex items-center justify-between pt-12">
    <div class="w-1/3"></div>
    <div class="w-1/3 flex justify-center">
        <Logo/>
    </div>

    <a href="/login" class="w-1/3 flex justify-end">
        {#if get(tokenStore) == null}
            <p class="pr-2">login</p> <Icon class="mr-20 text-2xl hover:cursor-pointer" icon="ic:baseline-login"/>
            {:else}
            <button on:click={() => {tokenStore.set(null);}} class="pr-2">logout</button> <Icon class="mr-20 text-2xl hover:cursor-pointer" icon="ic:baseline-logout"/>

        {/if}

    </a>
</div>

<div class="container w-3/5 m-auto">
    <slot></slot>
</div>
