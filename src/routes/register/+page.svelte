<script lang="ts">
  import Input from "$lib/components/Input.svelte";
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<svelte:head>
  <title>Register</title>
  <meta name="new-universe" content="new universe app" />
</svelte:head>

<main>
  <form method="POST">
    {#if form?.missing}<p class="error">All the fields are required</p>{/if}
    {#if form?.match}<p class="error">Passwords don't match!</p>{/if}
    <Input name="email" label="Email" required type="email" />
    <Input name="password" label="Password" required type="password" />
    <Input name="password2" label="Password" required type="password" />
    <section>
      <input type="submit" value="Login" />
    </section>
    <a href="/login">login</a>
  </form>
</main>

<style>
  :global(body) {
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  section {
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
