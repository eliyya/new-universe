<script lang="ts">
  import type { EventHandler } from "svelte/elements"
  import Icons from "../../lib/images/pngwing.com (2).png"

  const submit: EventHandler<SubmitEvent, HTMLFormElement> = (e) => {
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    const apiBase = "https://backend-universe.deno.dev"
    fetch(apiBase + "/auth/authorize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: email, password }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.message) {
          // error
          return
        }
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
  <form on:submit|preventDefault={submit}>
    <!-- <img src={Icons} alt="svelte welcome" /> -->
    <section>
      <label  for="email">email</label>
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
    background-image: url("/background.jpg");
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
    padding: 0.5rem;
  }

  label {
    position: relative;
    top: 2.3rem;
    left: 0.2rem;
    z-index: 1;
    color: #cdbfd8;
    font-size: 1rem;
    font-weight: 600;
  }

  input {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(22.5px);
    padding: 1rem;
    color: #cdbfd8;
    font-size: 1rem;
  }
  img {
    display: flex;
    justify-content: center;
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
    box-shadow: inset 20px 20px 60px #04ead6,inset 20px 20px 60px #14e0c1 , inset 23px 23px 46px #05e7bd, inset 40px 40px 80px #0ada80, inset 40px 40px 80px #08da94, inset 40px 40px 80px #0ada80, inset -20px -20px 60px #04ead6, inset -20px -20px 60px #14e0c1, inset -23px -23px 46px #05e7bd, inset -40px -40px 80px #0ada80, inset -40px -40px 80px #08da94, inset -40px -40px 80px #0ada80;
    border-radius: 50%;
    border:  solid 1px rgb(12, 231, 169);

  }
  input[type="submit"] {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(22.5px);
    padding: 1rem;
    color: #cdbfd8;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background: rgba(255, 255, 255, 0.25);
  }
</style>
