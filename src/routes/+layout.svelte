<script>
    import '../app.css';
    import Logo from "$lib/components/Logo.svelte";
</script>

<div class="flex justify-center items-center pt-12">
    <Logo/>
</div>

<div class="container w-3/5 m-auto">
    <slot></slot>
</div>