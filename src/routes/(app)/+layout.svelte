<script>
    import '../../app.css';
    import Logo from "$lib/components/Logo.svelte";
    import Icon from "@iconify/svelte";
</script>

<div class="flex items-center justify-between pt-12">
    <div class="w-1/3"></div>
    <div class="w-1/3 flex justify-center">
        <Logo/>
    </div>

    <a href="/login" class="w-1/3 flex justify-end">
        <p class="pr-2">login</p> <Icon class="mr-20 text-2xl hover:cursor-pointer" icon="ic:baseline-login"/>
    </a>
</div>

<div class="container w-3/5 m-auto">
    <slot></slot>
</div>
