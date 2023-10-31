<script lang="ts">
  import Input from "$lib/components/Input.svelte";
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<svelte:head>
  <title>login</title>
  <meta name="new-universe" content="new universe app" />
</svelte:head>

<main>
  <form method="POST">
    {#if form?.missing}<p class="error">All the fields are required</p>{/if}
    {#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
    <Input
      name="email"
      label="Email"
      required
      type="email"
      value={form?.email ?? ""}
    />
    <Input name="password" label="Password" required type="password" />
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

  .error {
    color: red;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
</style>
