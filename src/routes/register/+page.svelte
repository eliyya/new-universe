<script lang="ts">
  import Input from "$lib/compoents/Input.svelte"
  import { backendUrl } from "$lib/env"
  import type { EventHandler } from "svelte/elements"

  let error = ''
  let errorTimeour: NodeJS.Timeout

  const submit: EventHandler<SubmitEvent, HTMLFormElement> = (e) => {
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    const password2 = e.currentTarget.password2.value
    fetch(backendUrl+'/api/users/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: email, password }),
    })
      .then(async (r) => {
        if (r.status === 200) {
          window.location.href = '/login'
        } else {
          error = (await r.json()).message
          clearTimeout(errorTimeour)
          errorTimeour = setTimeout(() => error = '', 30_000)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
</script>

<svelte:head>
  <title>Register</title>
  <meta name="new-universe" content="new universe app" />
</svelte:head>

<main>
  <form action="">
    <Input name="email" label="Email" required type="email" />
    <Input name='password' label='Password' required type='password' />
    <Input name='password2' label='Password' required type='password' />
    <section> 
      <input type="submit" value="Login">
    </section>
    <a href="/login">login</a>
  </form>
</main>

<style>
  :global(body){
    background-image: url("/background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  section{
    display: flex;
    justify-content: center;
    align-items: center;
  }


   input[type="submit"] {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(22.5px);
    padding: 1rem;
    color: #cdbfd8;
    cursor: pointer;
    margin: 1rem;
  }
  input[type="submit"]:hover {
    background: rgba(255, 255, 255, 0.25);
  }
   

</style>
