<script lang="ts">
    import type { EventHandler } from "svelte/elements";
    import  Icons  from "../../lib/images/svelte-welcome.png";
    

    
    

    const submit: EventHandler<SubmitEvent, HTMLFormElement> = (e) => {
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const apiBase = "https://backend-universe.deno.dev";
        fetch(apiBase + "/auth/authorize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user: email, password }),
        })
            .then((r) => r.json())
            .then((r) => {
                if (r.message) {
                    // error
                    return;
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
</script>

<svelte:head>
    <title>login</title>
    <meta name="new-universe" content="new universe app" />
</svelte:head>

<main>
    <form on:submit|preventDefault={submit}>
        <section>
            <img src={Icons} alt="svelte welcome" />
            <label for="email">email</label>
            <input type="email" name="email" id="email" required />
        </section>
        <section>
            <label for="password">password</label>
            <input type="password" name="password" id="password" required />
        </section>
        <section>
            <input type="submit" value="Login" />
        </section>
    </form>
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background-image: url("/background.jpg") ;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
    }
   
    main {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;  
        font-family: sans-serif;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;  
        border-radius: 10px;
        padding: 2rem;

    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1rem;
    }
   
    label {
        position: relative;
        top: 2rem;
        left: 0.3rem;
        z-index: 1;
        color: #CDBFD8;
        font-size: 1rem;
    }

    input {
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.7);
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(22.5px);
        padding: 1rem;
        color: #CDBFD8;
    }
   img{
         
         width: 100px;
         height: 100px;
         margin-bottom: 1rem;
   }
</style>
