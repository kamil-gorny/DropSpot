<script>
    import {register} from "../../../services/auth-service.ts";
    let firstName = "";
    let lastName = "";
    let email = "";
    let password = "";
</script>

<div class="max-w-md mr-auto ml-auto h-screen flex flex-col">
    <span class="text-xl font-bold pt-14 pb-10">Sign up</span>
    <form on:submit|preventDefault={register({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    })} class="flex flex-col gap-6 ">
        <div class="flex flex-col">
            <label for="firstName">First name</label>
            <input name="firstName" type="text" class="border rounded h-12" bind:value={firstName}/>
        </div>
        <div class="flex flex-col">
            <label for="lastName">Last name</label>
            <input name="lastName" type="text" class="border rounded h-12" bind:value={lastName}/>
        </div>
        <div class="flex flex-col">
            <label for="email">Email</label>
            <input name="email" type="text" class="border rounded h-12" bind:value={email}/>
        </div>
        <div class="flex flex-col">
            <div class="flex justify-between">
                <label for="password">Password</label>

            </div>

            <input  name="password" type="password" class="border rounded h-12" bind:value={password}/>
        </div>
        <button class="bg-black text-white h-12">Create</button>

    </form>
</div>