
<script lang="ts">
  import type { EventHandler } from "svelte/elements"
  import Icons from "../../lib/images/pngwing.com (2).png"
  import Input from "$lib/compoents/Input.svelte"
  import { backendUrl } from "$lib/env"
  import { session } from "$lib/stores/session"

  let error = ''
  let errorTimeour: NodeJS.Timeout

  const submit: EventHandler<SubmitEvent, HTMLFormElement> = (e) => {
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    fetch(backendUrl + "/auth/authorize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: email, password }),
    })
      .then((r) => r.json())
      .then(async (r: {token:string;expires:number}) => {
        const req = await fetch(backendUrl+'/api/users/@me', {
          headers: { Authorization: `Bearer ${r.token}` },
        }).then((r) => r.json() as Promise<{
          avatar: string | null
          created_at: string | null
          displayname: string | null
          email: string
          id: string
          username: string
        }>).catch((e) => console.log(e))
        if (req) {
          session.set({ token: r.token, expires: r.expires, user: req })
          window.location.href = '/app'
        }
        else error = 'Invalid credentials'
        clearTimeout(errorTimeour)
        errorTimeour = setTimeout(() => error = '', 30_000)
      })
      .catch((e) => {
        console.log(e)
      })
  }
</script>

<svelte:head>
  <title>login</title>
  <meta name="new-universe" content="new universe app" />
</svelte:head>

<main>
  <form on:submit|preventDefault={submit} >
    {#if error}
      <span class="Error" >{error}</span>
    {/if}
    <Input name='email' label='Email' required type='email' />
    <Input name='password' label='Password' required type='password' />
    <section>
      <input type="submit" value="Login" />
    </section>
    <a href="/register">resgistrate</a>
  </form>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-image: url("/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
  input[type="submit"] {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(22.5px);
    padding: 2rem;
    color: #cdbfd8;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  span {
    color: red;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  }
  
</style>
