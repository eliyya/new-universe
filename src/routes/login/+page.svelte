<script lang="ts">
    import type { EventHandler } from "svelte/elements";

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
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: black;
    }
    form {
        background: aqua;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1rem;
    }
    label {
        position: relative;
        top: 1.2rem;
        left: 0.2rem;
        z-index: 1;
    }

    input {
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.7);
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(22.5px);
    }
</style>
