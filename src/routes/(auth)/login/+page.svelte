<script>
    let email = "";
    let password = "";
    const url = "http://localhost:5170/api/identity/login";
    async function handleLogin() {
        console.log(JSON.stringify({ email, password }))
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        if (response.ok) {

        } else {

        }
    }
</script>
<div class="max-w-md mr-auto ml-auto h-screen flex flex-col">
    <span class="text-xl font-bold pt-14 pb-10">Login</span>
    <form on:submit|preventDefault={handleLogin} class="flex flex-col gap-6 ">
        <div class="flex flex-col">
            <label for="email">Email</label>
            <input name="email" bind:value={email} type="text" class="border rounded h-12"/>
        </div>
        <div class="flex flex-col">
            <div class="flex justify-between">
                <label for="password">Password</label>
                <a class="underline hover:cursor-pointer">Forgot your password?</a>
            </div>

            <input bind:value={password}  name="password" type="password" class="border rounded h-12"/>
        </div>
        <button type="submit" class="bg-black text-white h-12">Sign in</button>
        <div class="flex items-center justify-center my-4">
            <div class="flex-grow border-t border-gray-300"></div>
            <span class="px-4 text-gray-500">or</span>
            <div class="flex-grow border-t border-gray-300"></div>
        </div>

            <button class="bg-black text-white h-12">
                <a href="/signup">Create account</a></button>

    </form>
</div>