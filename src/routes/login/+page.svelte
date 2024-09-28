<div class="max-w-md mr-auto ml-auto h-screen flex flex-col">
    <span class="text-xl font-bold pt-28 pb-10">Login</span>
    <form class="flex flex-col gap-6 ">
        <div class="flex flex-col">
            <label for="email">Email</label>
            <input name="email" type="text" class="border rounded h-12"/>
        </div>
        <div class="flex flex-col">
            <div class="flex justify-between">
                <label for="password">Password</label>
                <a class="underline hover:cursor-pointer">Forgot your password?</a>
            </div>

            <input  name="password" type="password" class="border rounded h-12"/>
        </div>
        <button class="bg-black text-white h-12">Sign in</button>
    </form>
</div>